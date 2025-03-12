// ===== JAVASCRIPT FUNCTIONALITY =====

// Get the Tibetan year based on date of birth
function getTibetanYear(birthDate) {
    const birthYear = birthDate.getFullYear();
    
    // Check if the year is in our losarDates object
    if (losarDates[birthYear]) {
        // Check if birth date is before Losar of that year
        if (birthDate < losarDates[birthYear].date) {
            return birthYear - 1;
        }
        return birthYear;
    }
    
    // Fallback for years not in our dataset
    // For years before 1927
    if (birthYear < 1927) {
        // Approximate Losar to mid-February
        const approxLosar = new Date(birthYear, 1, 15); // February 15th
        if (birthDate < approxLosar) {
            return birthYear - 1;
        }
        return birthYear;
    }
    
    // For years after 2046
    if (birthYear > 2046) {
        // Approximate Losar to mid-February
        const approxLosar = new Date(birthYear, 1, 15); // February 15th
        if (birthDate < approxLosar) {
            return birthYear - 1;
        }
        return birthYear;
    }
    
    return birthYear;
}

// Get animal sign based on Tibetan year
function getAnimalSign(tibetanYear) {
    // First check if we have this year in our dataset
    if (losarDates[tibetanYear]) {
        return losarDates[tibetanYear].animal;
    }
    
    // Fallback calculation for years not in our dataset
    // The baseline is 1900 (Metal-Rat year)
    // Calculate the position in the 12-year cycle
    const animalIndex = (tibetanYear - 1900) % 12;
    return animals[animalIndex >= 0 ? animalIndex : animalIndex + 12];
}

// Get element based on Tibetan year
function getElement(tibetanYear) {
    // First check if we have this year in our dataset
    if (losarDates[tibetanYear]) {
        return losarDates[tibetanYear].element;
    }
    
    // Fallback calculation for years not in our dataset
    // Elements repeat in 10-year cycles, each element for 2 years
    // The baseline is 1900 (Metal year)
    const elementIndex = Math.floor(((tibetanYear - 1900) % 10) / 2);
    return elements[elementIndex >= 0 ? elementIndex : elementIndex + 5];
}

// Add animation to elements
function addFadeInAnimation(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s, transform 0.5s';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Show loading spinner
function showLoading(containerId) {
    document.getElementById(containerId).classList.add('active');
}

// Hide loading spinner
function hideLoading(containerId) {
    document.getElementById(containerId).classList.remove('active');
}

// Generate the text file content with the results
function generateResultText(animal, element, summary) {
    return `Your Tibetan Astrological Sign: ${element} ${animal}

${summary}`;
}

// Offer to download the text file with the results
function offerTextFileDownload(animal, element, summary) {
    const textContent = generateResultText(animal, element, summary);
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'my_tibetan_astrology.txt';
    downloadLink.className = 'download-btn';
    downloadLink.textContent = 'Download Your Results';
    
    // Add to the results container
    const resultContainer = document.getElementById('result-container');
    
    // Check if a download button already exists
    const existingButton = resultContainer.querySelector('.download-btn');
    if (existingButton) {
        resultContainer.removeChild(existingButton);
    }
    
    resultContainer.appendChild(downloadLink);
    
    // Style the button to match the calculate button
    downloadLink.style.display = 'block';
    downloadLink.style.maxWidth = '400px';
    downloadLink.style.margin = '30px auto 0';
    downloadLink.style.backgroundColor = 'var(--primary-color)';
    downloadLink.style.color = 'white';
    downloadLink.style.padding = '14px 24px';
    downloadLink.style.fontSize = '18px';
    downloadLink.style.borderRadius = '5px';
    downloadLink.style.cursor = 'pointer';
    downloadLink.style.textAlign = 'center';
    downloadLink.style.textDecoration = 'none';
    downloadLink.style.fontWeight = 'bold';
    
    // Add hover effect
    downloadLink.onmouseover = function() {
        this.style.backgroundColor = 'var(--primary-dark)';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    };
    
    downloadLink.onmouseout = function() {
        this.style.backgroundColor = 'var(--primary-color)';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    };
}

// Calculate and display the astrology results
function calculateAstrology() {
    const dobString = document.getElementById('dob').value;
    
    if (!dobString) {
        alert('Please enter your date of birth');
        return;
    }
    
    // Show loading spinner
    showLoading('form-loading');
    
    // Simulate calculation time (for effect)
    setTimeout(() => {
        const dob = new Date(dobString);
        const tibetanYear = getTibetanYear(dob);
        const animal = getAnimalSign(tibetanYear);
        const element = getElement(tibetanYear);
        
        // Hide loading spinner
        hideLoading('form-loading');
        
        // Show result loading spinner
        showLoading('result-loading');
        
        // Populate results
        document.getElementById('result-title').textContent = 'Your Tibetan Astrology Reading';
        document.getElementById('animal-emoji').textContent = animalEmojis[animal] || '🔮';
        document.getElementById('animal-text').textContent = `${element} ${animal}`;
        
        // Simplified result display - only show the summary
        document.getElementById('summary-text').textContent = animalData[animal].summary;
        
        // Clear any existing result items
        const resultGrid = document.querySelector('.result-grid');
        resultGrid.innerHTML = '';
        
        // Show result container with delay for the effect
        setTimeout(() => {
            hideLoading('result-loading');
            document.getElementById('result-container').style.display = 'block';
            
            addFadeInAnimation(document.querySelector('.animal-display'), 0);
            addFadeInAnimation(document.querySelector('.summary'), 400);
            
            // Offer to download the text file
            offerTextFileDownload(animal, element, animalData[animal].summary);
            
            // Scroll to results
            document.getElementById('result-container').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        
    }, 1500);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the calculate button
    document.getElementById('calculate-btn').addEventListener('click', calculateAstrology);
    
    // Set default date to today
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('dob').value = formattedDate;
});