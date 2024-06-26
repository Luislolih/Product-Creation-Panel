import { ProviderContext } from "../../Context/ProductContext";
import Input from "../Input/Input";
import SelectSize from "../SelectSize/SelectSize";
import { useContext, useEffect } from "react";
import Button from "../Button/Button";
const SecondForm = () => {
    const {
        sizesList,
        description,
        setDescription,
        sizesRender,
        setSizesRender,
        errors,
        setErrors,
    } = useContext(ProviderContext);
    useEffect(() => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };

            if (description.trim()) {
                delete newErrors.description;
            }

            return newErrors;
        });
    }, [description]);
    const handleSizeAndQuantity = (selectedSize, quantity, idx) => {
        const newSize = { name: selectedSize, quantity: quantity };
        const updatedSizes = [...sizesRender];

        updatedSizes[idx] = newSize;

        setSizesRender(updatedSizes);
    };

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "description") {
            setDescription(value);
        }
    };

    const addSize = () => {
        setSizesRender([...sizesRender, { name: "", quantity: 0 }]);
    };

    const deleteSize = (idx) => {
        const copySizes = [...sizesRender];
        copySizes.splice(idx, 1);
        setSizesRender(copySizes);
    };

    const handleBlur = (fieldName) => {
        if (fieldName === "description") {
            if (!description.trim()) {
                setErrors({
                    ...errors,
                    description: "Debes ingresar una descripción",
                });
            }
        }
    };

    return (
        <div className="formMargin">
            <div className="formContainerTop">
                <SelectSize
                    title="Tallas"
                    sizesList={sizesList}
                    sizes={sizesRender}
                    handleSizeAndQuantity={handleSizeAndQuantity}
                    optionDefault="Elige una talla"
                    addSize={addSize}
                    deleteSize={deleteSize}
                />
                <Input
                    title="Descripción"
                    placeholder='ejemplo: "polo de algodón jersey 30/1"'
                    value={description}
                    type="text"
                    onChange={(e) =>
                        handleInputChange("description", e.target.value)
                    }
                    onBlur={() => handleBlur("description")}
                    errors={errors.description}
                />
            </div>
            <div className="flex w-full justify-between mt-5 ">
                <Button
                    to="/add/basic-information"
                    title="Anterior"
                    className=" bg-defaultColor button"
                />
                <Button
                    to="/add/files"
                    title="Siguiente"
                    className=" bg-defaultColor button"
                />
            </div>
        </div>
    );
};

export default SecondForm;
