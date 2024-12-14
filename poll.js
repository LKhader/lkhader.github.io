document.addEventListener('DOMContentLoaded', () => {
    const pollButtons = document.querySelectorAll('.poll-options button');
    const resultDisplay = document.getElementById('vote-result');
    const votesDisplay = {
        Louie: document.getElementById('votes-louie'),
        Daniel: document.getElementById('votes-daniel'),
        Louis: document.getElementById('votes-louis'),
        Jackson: document.getElementById('votes-jackson')
    };

    // Initialize votes (or load existing votes from localStorage)
    const votes = JSON.parse(localStorage.getItem('votes')) || {
        Louie: 0,
        Daniel: 0,
        Louis: 0,
        Jackson: 0
    };

    // Update the displayed vote counts
    Object.keys(votes).forEach(wrestler => {
        votesDisplay[wrestler].textContent = votes[wrestler];
    });

    // Handle vote button clicks
    pollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const wrestler = button.getAttribute('data-wrestler');
            votes[wrestler] += 1;
            localStorage.setItem('votes', JSON.stringify(votes));

            // Update the result display
            resultDisplay.textContent = `You voted for ${wrestler}! Total votes: ${votes[wrestler]}`;

            // Update the vote counts on the page
            votesDisplay[wrestler].textContent = votes[wrestler];
        });
    });
});
