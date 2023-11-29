class modalUtility {



    showModal = async (question) => {
        const selectedValue = await browser.execute((question) => {
            // Create modal container
            const modalContainer = document.createElement('div');
            modalContainer.style.position = 'fixed';
            modalContainer.style.top = '50%';
            modalContainer.style.left = '50%';
            modalContainer.style.transform = 'translate(-50%, -50%)';
            modalContainer.style.padding = '20px';
            modalContainer.style.width = '80%';
            modalContainer.style.maxWidth = '600px';
            modalContainer.style.minWidth = '30%'; // Minimum width as 30% of the screen
            modalContainer.style.backgroundColor = '#f0f0f0'; // Light gray background
            modalContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            modalContainer.style.borderRadius = '10px'; // Rounded corners
            modalContainer.style.zIndex = '1000';

            // Create dynamic question
            const dynamicQuestion = document.createElement('p');
            dynamicQuestion.innerText = question;
            dynamicQuestion.style.marginBottom = '15px'; // Add some margin below the question
            modalContainer.appendChild(dynamicQuestion);

            // Create radio buttons
            const option1 = document.createElement('input');
            option1.type = 'radio';
            option1.name = 'options';
            option1.value = 'yes';

            const option2 = document.createElement('input');
            option2.type = 'radio';
            option2.name = 'options';
            option2.value = 'no';

            // Append radio buttons to a container for better styling
            const radioContainer = document.createElement('div');
            radioContainer.appendChild(option1);
            radioContainer.appendChild(document.createTextNode(' Yes '));
            radioContainer.appendChild(option2);
            radioContainer.appendChild(document.createTextNode(' No '));
            radioContainer.style.marginBottom = '15px'; // Add margin below the radio buttons
            modalContainer.appendChild(radioContainer);

            // Create submit button
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Submit';
            submitButton.style.backgroundColor = '#4CAF50'; // Green submit button
            submitButton.style.color = 'white'; // White text color
            submitButton.style.border = 'none'; // No border
            submitButton.style.borderRadius = '10px'; // Rounded corners for the submit button
            submitButton.style.padding = '10px'; // Padding for better click target

            // Append submit button to modal container
            modalContainer.appendChild(submitButton);

            // Append modal container to the body
            document.body.appendChild(modalContainer);

            // Define function to close the modal
            window.closeModal = function () {
                document.body.removeChild(modalContainer);
            };

            // Define function to get selected value and close modal
            window.getSelectedValue = function () {
                const radios = document.getElementsByName('options');
                let selectedValue;

                for (const radio of radios) {
                    if (radio.checked) {
                        selectedValue = radio.value;
                        break;
                    }
                }

                return selectedValue;
            };

            // Wait for the user to interact with the modal
            return new Promise((resolve) => {
                submitButton.addEventListener('click', () => {
                    const selectedValue = window.getSelectedValue();
                    window.closeModal();
                    resolve(selectedValue);
                });
            });
        }, question);

        // Use the selectedValue as needed in your test logic
        console.log('Selected Value:', selectedValue);
        return selectedValue;
    };







}

export default new modalUtility();






