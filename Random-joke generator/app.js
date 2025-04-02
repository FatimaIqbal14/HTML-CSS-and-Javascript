const jokes = {
    "- Dad Joke": '"Why don’t skeletons fight each other? They don’t have the guts."',
    "- Pun": '"I told my wife she was drawing her eyebrows too high. She looked surprised!"',
    "- Classic": '"Why did the scarecrow win an award? Because he was outstanding in his field!"',
    "- Knock Knock": '"Knock knock. Who’s there? Cow says. Cow says who? No, cow says moooo!"',
    "- Tech": '"Why do programmers prefer dark mode? Because the light attracts bugs!"',
    "- Wordplay": '"I’m reading a book on anti-gravity. It’s impossible to put down!"',
    "- Animal": '"What do you call a fish wearing a bowtie? Sofishticated."',
    "- Food": '"Why did the tomato turn red? Because it saw the salad dressing!"',
    "- Office": '"Why did the scarecrow apply for a job? Because he was outstanding in his field!"',
    "- Science": '"Why can’t you trust an atom? Because they make up everything!"',
    "- Math": '"Parallel lines have so much in common. It’s a shame they’ll never meet."',
    "- Pirate": '"Why don’t pirates take showers before they walk the plank? Because they’ll just wash up on shore later!"',
    "- Doctor": '"Doctor, I think I’m addicted to Twitter! Sorry, I don’t follow."',
    "- Music": '"Why did the musician get kicked out of the band? Because he was always flat!"',
    "- Ghost": '"Why did the ghost go to the party? Because he heard it was going to be a boo-last!"',
    "- Chicken": '"Why did the chicken go to the seance? To talk to the other side!"',
    "- Gym": '"Why don’t weightlifters ever get locked out? They always have the right keys!"',
    "- History": '"Why was the calendar so popular? Because it had so many dates!"',
    "- Space": '"Why did Mars break up with Venus? Because she needed space!"',
    "- Relationship": '"My wife told me to stop acting like a flamingo. So I had to put my foot down."'
};

document.querySelector(".generate").addEventListener("click", () => {
    generate();
});

function generate() {
    const type = Object.keys(jokes);

    const joke = Math.floor(Math.random() * type.length);

    const jokes_whole = jokes[type[joke]];

    document.querySelector(".joke").innerText = jokes[type[joke]];
    document.querySelector(".type").innerText = type[joke];
}

window.onload = function(){
    generate();
}