import Button from "../Button/Button";

const ConfirmationDelete = ({
    title,
    cancelDelete,
    deleteProduct,
    className,
}) => {
    return (
        <div className={className}>
            <p>{title}</p>
            <div className="w-full flex flex-col gap-3 text-sm  items-center">
                <Button
                    type="button"
                    className="z-30 bg-red-500 button w-full "
                    onClick={deleteProduct}
                    title="Eliminar producto"
                ></Button>
                <Button
                    type="button"
                    className="z-30 bg-white text-defaultColor button w-full "
                    onClick={cancelDelete}
                    title="Cancelar"
                ></Button>
            </div>
        </div>
    );
};

export default ConfirmationDelete;
