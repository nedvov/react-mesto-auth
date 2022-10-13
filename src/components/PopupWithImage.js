import React from "react";

function PopupWithImage({ isOpened, onClose, card, isSystem }) {
    const popup = React.useRef();

    React.useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === "Escape") {
                onClose();
            }
        }

        function closeByOuterClick(evt) {
            const withinBoundaries = evt
                .composedPath()
                .includes(popup.current.children[0]);
            if (!withinBoundaries) {
                onClose();
            }
        }

        if (isOpened) {
            document.addEventListener("keydown", closeByEscape);
            popup.current.addEventListener("click", closeByOuterClick);
            return () => {
                document.removeEventListener("keydown", closeByEscape);
            };
        }
    }, [isOpened]);

    return (
        <div
            ref={popup}
            className={isOpened ? "popup popup_opened" : "popup"}
            id="image-popup"
        >
            <div className="popup__image-container">
                <button
                    type="reset"
                    className="popup__close-button"
                    id="image-popup__close-button"
                    onClick={onClose}
                ></button>
                <img
                    className={
                        isSystem ? "popup__system-image" : "popup__image"
                    }
                    src={card.link && card.link}
                    alt={card.name && card.name}
                />
                <p className="popup__image-description">{card.name}</p>
            </div>
        </div>
    );
}

export default PopupWithImage;
