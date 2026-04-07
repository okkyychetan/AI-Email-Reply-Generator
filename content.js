console.log("Email writer extension loaded");
function getEmailContent() {
    const selectors =[
        '.h7',
        '.a3s.ail',
        '.gmail_quote',
        '[role="presentation"]'
    ];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();

        }
            return '';
    }
    

}


function findComposeToolbar() {
    const selectors = ['.btc', '.aDh', '[role="toolbar"]', '.gU.Up'];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
        return null;
    }
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3 ai-rely-button'; // error aa sakta hai
    button.style.marginRight = '8px';
    button.innerText = 'AI Rely';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'AI Rely');
    return button;

}

function injectButton(){
    const existingButton = document.querySelector('.ai-rely-button');
    if (existingButton) {
        existingButton.remove();
    }

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Compose toolbar not found");
        return;
    }
    console.log("Compose toolbar found, injecting button");
    const button = createAIButton();
    button.classList.add('.ai-rely-button');

    button.addEventListener('click', async () => {
        try {
            button.innerText = 'Generating...';
            button.disabled = true;
            const emailContent = getEmailContent();

            const response = await fetch('http://localhost:8080/api/generate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            
                },
                body: JSON.stringify({emailContent: emailContent, tone:"professional"})
            })
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const generatedReply = await response.text();

            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]'
            );
            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }

        } catch (error) {
            
        }
        finally{
            button.innerText = 'AI Rely';
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}


const observer = new MutationObserver((mutations) => {
    for(const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElement = addedNodes.some(node => node.nodeType === Node.ELEMENT_NODE && 
            (node.matches('.aDh, .btc, [role="dialog"]')
        || node.querySelector('.aDh, .btc, [role="dialog"]'))
    );

    if (hasComposeElement) {
        console.log("Compose window detected, ");
        setTimeout(injectButton, 1000);
    }

    }
});


observer.observe(document.body, { childList: true, subtree: true });