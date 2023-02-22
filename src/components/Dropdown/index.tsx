import React from 'react';

import * as S from './style';
import { MODAL_ID } from '../Modal';

export type PlacementX = 'left' | 'right' | 'center';
export type Head = any;
export type Overlay = any;
export type Trigger = 'click' | 'hover';

interface IOwnProps {
    head: Head;
    headComponent?: React.ComponentType;
    overlayComponent?: React.ComponentType;
    overlay: Overlay;
    className?: string;
    placementX?: PlacementX;
    onOpen?: () => void;
    onClose?: () => void;
    toggleClose?: boolean;
    trigger?: Trigger;
    offsetY?: number;
    closeWhen?:
        | 'clickOutsideOverlay'
        | 'clickOutsideOverlayOrSubmit'
        | 'clickOutsideOverlayOrSubmitOrCancel'
        | ((target: TPortalNode, headNode: Node, overlayNode: Node) => boolean);
    reserveTop?: number;
    reserveBottom?: number;
    disabled?: boolean;
}

type TProps = IOwnProps & React.InputHTMLAttributes<HTMLInputElement>;

interface IState {
    isOpen: boolean;
    position: {
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
        left?: number | string;
        transform?: string;
    };
}

type TPortalNode = Node & {
    parentNode: TPortalNode;
    id: number | string;
};

interface ISubmitButtonNode extends Node {
    type: 'submit';
    name: 'close';
}

export const isElemInPortal = (targetNode: TPortalNode): boolean => {
    let elemNode = targetNode;
    let isInPortal = false;

    while (elemNode.parentNode) {
        if (elemNode.parentNode.id === MODAL_ID) {
            isInPortal = true;
            break;
        }

        elemNode = elemNode.parentNode;
    }

    return isInPortal;
};

export const isElemLink = (targetNode: Node, overlayNode: Node): boolean => {
    let elemNode = targetNode;
    let isInLink = false;

    while (elemNode.parentNode) {
        if (elemNode.nodeName === 'A') {
            isInLink = true;
            break;
        }

        elemNode = elemNode.parentNode;
    }

    return isInLink && overlayNode.contains(elemNode);
};

class Dropdown extends React.Component<TProps, IState> {
    static clickOutsideOverlay(target: Node, headNode: Node, overlayNode: Node): boolean {
        const isOverlayNode = overlayNode && overlayNode.contains(target);
        return !isOverlayNode;
    }

    static clickOutsideOverlayOrSubmit(target: ISubmitButtonNode, headNode: Node, overlayNode: Node): boolean {
        const isOutsideOverlay = Dropdown.clickOutsideOverlay(target, headNode, overlayNode);
        const isSubmit = target.type === 'submit';
        return isOutsideOverlay || isSubmit;
    }

    static clickOutsideOverlayOrSubmitOrCancel(target: ISubmitButtonNode, headNode: Node, overlayNode: Node): boolean {
        const isOutsideOverlayOrSubmit = Dropdown.clickOutsideOverlayOrSubmit(target, headNode, overlayNode);
        const isClose = target.name === 'close';
        return isOutsideOverlayOrSubmit || isClose;
    }

    static defaultProps = {
        placementX: 'left',
        offsetY: 10,
        trigger: 'click',
        onOpen: () => {},
        onClose: () => {},
        className: '',
        reserveTop: 128,
        reserveBottom: 0,
        toggleClose: true,
        disabled: false,
        headComponent: S.Head,
        overlayComponent: S.Overlay,
    };

    private headRef = React.createRef<HTMLDivElement>();

    private overlayRef = React.createRef<HTMLDivElement>();

    private mouseLeaveTimerId: number = 0;

    constructor(props: TProps) {
        super(props);

        this.state = {
            isOpen: false,
            position: this.getHorizontalPosition(props.placementX),
        };
    }

    componentDidMount(): void {
        if (this.props.trigger === 'click') {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    getSnapshotBeforeUpdate(): { pageHeight: number } {
        return { pageHeight: window.document.body.scrollHeight };
    }

    componentDidUpdate(prevProps: TProps, prevState: IState, snapshot: any): void {
        const head = this.headRef.current;
        const overlay = this.overlayRef.current;
        if (!!head && !!overlay && this.state.isOpen === true && this.state.isOpen !== prevState.isOpen) {
            this.setState({
                position: {
                    ...this.getHorizontalPosition(this.props.placementX),
                    ...this.getVerticalPosition(head, overlay, this.props.offsetY, snapshot),
                },
            });
        }
    }

    componentWillUnmount() {
        if (this.props.trigger === 'click') {
            document.removeEventListener('click', this.handleDocumentClick);
        }
    }

    private getHorizontalPosition(placementX: TProps['placementX']): IState['position'] {
        if (!this.headRef) {
            return placementX as IState['position'];
        }

        const headNode = this.headRef.current;
        const overlayNode = this.overlayRef.current;

        if (placementX === 'left') {
            return { left: 0 };
        }
        if (placementX === 'right') {
            return { right: 0 };
        }
        if (placementX === 'center') {
            return {
                left: headNode && overlayNode ? `-${(overlayNode.offsetWidth - headNode.offsetWidth) / 2}px` : '0px',
            };
        }
        return {};
    }

    private getVerticalPosition(
        head: HTMLElement,
        overlay: HTMLElement,
        offsetY: IOwnProps['offsetY'] = 0,
        snapshot: any,
    ): IState['position'] {
        const headTop = document.documentElement.scrollTop + head.getBoundingClientRect().top;
        const headHeight = head.offsetHeight;
        const overlayHeight = overlay.offsetHeight;
        const { reserveBottom = 0, reserveTop = 128 } = this.props;
        const isFitsToBottom = headTop + headHeight + offsetY + overlayHeight + reserveBottom <= snapshot.pageHeight;

        if (isFitsToBottom) {
            return { top: headHeight + offsetY };
        }

        const isFitsToTop = headTop - offsetY >= overlayHeight + reserveTop;

        if (isFitsToTop) {
            return { bottom: headHeight + offsetY };
        }

        return { top: headHeight + offsetY };
    }

    private getHandlers() {
        const { trigger, disabled, toggleClose } = this.props;

        if (disabled) {
            return {};
        }

        if (toggleClose === false) {
            return {
                onClick: this.handleOpen,
            };
        }

        if (trigger === 'hover') {
            return {
                onMouseEnter: () => {
                    window.clearTimeout(this.mouseLeaveTimerId);
                    this.handleOpen();
                },
                onMouseLeave: () => {
                    window.clearTimeout(this.mouseLeaveTimerId);
                    this.mouseLeaveTimerId = window.setTimeout(this.handleHide, 200);
                },
            };
        }
        return {
            role: 'button',
            onClick: this.handleToggleOpen,
        };
    }

    private getOverlayHandlers() {
        if (this.props.trigger === 'hover') {
            return {
                onMouseEnter: () => {
                    window.clearTimeout(this.mouseLeaveTimerId);
                    this.handleOpen();
                },
                onMouseLeave: () => {
                    window.clearTimeout(this.mouseLeaveTimerId);
                    this.mouseLeaveTimerId = window.setTimeout(this.handleHide, 200);
                },
            };
        }
        return null;
    }

    private handleOpen = (): void => {
        this.setState({ isOpen: true }, this.props.onOpen);
    };

    private handleHide = (): void => {
        this.setState({ isOpen: false }, this.props.onClose);
    };

    handleToggleOpen = (): void => (this.state.isOpen ? this.handleHide() : this.handleOpen());

    private handleDocumentClick = (event: Event) => {
        const { closeWhen } = this.props;
        const headNode = this.headRef.current;
        const overlayNode = this.overlayRef.current;

        // handleToggleOpen'll do this
        if (headNode && headNode.contains(event.target as Node)) {
            return;
        }

        if (!this.state.isOpen) {
            return;
        }

        this.handleHide();
    };

    private renderHead(): React.ReactNode {
        const { head } = this.props;
        const { isOpen } = this.state;

        if (React.isValidElement(head)) {
            return head;
        }

        return React.createElement(head, { isOpen });
    }

    private renderOverlay(): React.ReactNode {
        const { overlay } = this.props;

        if (React.isValidElement(overlay)) {
            return overlay;
        }

        return React.createElement(overlay);
    }

    render() {
        const {
            onBlur,
            onFocus,
            className,
            headComponent: Head = S.Head,
            overlayComponent: Overlay = S.Overlay,
        } = this.props;
        const { isOpen, position } = this.state;

        return (
            <S.Root className={className} tabIndex={0} onFocus={onFocus} onBlur={onBlur}>
                <Head {...this.getHandlers()} ref={this.headRef}>
                    {this.renderHead()}
                </Head>
                {isOpen && (
                    <Overlay ref={this.overlayRef} style={position} {...this.getOverlayHandlers()}>
                        {this.renderOverlay()}
                    </Overlay>
                )}
            </S.Root>
        );
    }
}

export default Dropdown;

export const Head = S.Head;
export const Overlay = S.Overlay;
