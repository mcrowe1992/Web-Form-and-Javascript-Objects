class FormValidator {
    constructor(private form: HTMLFormElement) {
        this.form.addEventListener("submit", this.validateForm.bind(this));
    }

    private validateForm(event: Event) {
        event.preventDefault();
        const nameInput = this.form.querySelector('input[name="name"]') as HTMLInputElement;
        const priceInput = this.form.price as HTMLInputElement;
        const descriptionInput = this.form.description as HTMLTextAreaElement;
        const expirationDateInput = this.form.expirationDate as HTMLInputElement;

        const nameError = document.getElementById("nameError") as HTMLDivElement;
        const priceError = document.getElementById("priceError") as HTMLDivElement;
        const descriptionError = document.getElementById("descriptionError") as HTMLDivElement;
        const expirationDateError = document.getElementById("expirationDateError") as HTMLDivElement;

        nameError.textContent = "";
        priceError.textContent = "";
        descriptionError.textContent = "";
        expirationDateError.textContent = "";

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
        }

        if (isNaN(parseFloat(priceInput.value)) || parseFloat(priceInput.value) <= 0) {
            priceError.textContent = "Price must be a positive number.";
        }

        if (descriptionInput.value.trim() === "") {
            descriptionError.textContent = "Description is required.";
        }

        if (new Date(expirationDateInput.value) < new Date()) {
            expirationDateError.textContent = "Expiration Date must be in the future.";
        }

        if (
            nameError.textContent === "" &&
            priceError.textContent === "" &&
            descriptionError.textContent === "" &&
            expirationDateError.textContent === ""
        ) {
            const resultDiv = document.getElementById("result") as HTMLDivElement;
            resultDiv.textContent = "Form submitted successfully!";
        }
    }
}

const validationForm = document.getElementById("validationForm") as HTMLFormElement;
const formValidator = new FormValidator(validationForm);