import { createMainContent } from './main.js';
import { fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

    createMainContent();
    createPopularityContainer();
    createCommentContainer();
};

const createPopularityContainer = () => {
    //make the container section
    const popularityContainer = document.createElement("section");
    popularityContainer.className = "popularity-container";
    popularityContainer.style.display = "flex";
    popularityContainer.style.flexDirection = "column";
    popularityContainer.style.alignItems = "center";
    popularityContainer.style.marginTop = "5px";
    document.body.appendChild(popularityContainer);

    //make a form
    const form = document.createElement("form");
    form.id = "popularity-form";
    popularityContainer.appendChild(form);

    //make the score div
    const scoreDiv = document.createElement("div");
    scoreDiv.id = "score-div";
    scoreDiv.style.marginBottom = "10px";
    form.append(scoreDiv);

    //popularity score text
    const popularityScore = document.createElement("span");
    popularityScore.innerText = "Popularity Score: ";

    //score
    const score = document.createElement("span");
    score.id = "score-count";
    score.innerText = 0;
    scoreDiv.append(popularityScore, score);

    //make the voting div
    const votingDiv = document.createElement("div");
    votingDiv.id = "voting-div";
    form.append(votingDiv);

    //make an upvote button
    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote";
    upvoteBtn.style.marginRight = "3px";

    //make a downvote button
    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote";
    downvoteBtn.style.marginLeft = "3px";

    //append to the votingDiv
    votingDiv.append(upvoteBtn, downvoteBtn);
}

const createCommentContainer = () => {
    //make the container section
    const commentContainer = document.createElement("section");
    commentContainer.className = "comment-container";
    commentContainer.style.display = "flex";
    commentContainer.style.flexDirection = "column";
    commentContainer.style.alignItems = "center";
    commentContainer.style.marginTop = "5px";
    document.body.appendChild(commentContainer);

    //make form
    const form = document.createElement("form");
    form.id = "comment-form";
    form.style.margin = "20px";
    form.style.display = "flex";
    form.style.width = "100%";
    form.style.justifyContent = "center";
    form.style.alignItems = "center";
    commentContainer.append(form);

    //make comment input area
    const commentInput = document.createElement("input");
    commentInput.id = "comment-input";
    commentInput.name = "comment-input";
    commentInput.placeholder = "Add a comment...";
    commentInput.required = true;
    commentInput.style.marginRight = "10px";

    //make label for comment input
    const commentLabel = document.createElement("label");
    commentLabel.for = "comment-input";
    commentLabel.innerText = "Comment: ";
    commentLabel.style.marginRight = "5px";

    //make a submit comment button
    const submitCommentBtn = document.createElement("button");
    submitCommentBtn.id = "submit-comment";
    submitCommentBtn.innerText = "Submit";

    form.append(commentLabel, commentInput, submitCommentBtn);

    //make comments section
    const comments = document.createElement("div");
    const ul = document.createElement("ul");
    ul.id = "comments-list";
    ul.style.listStyle = "none";
    comments.className = "comments";
    comments.style.border = "solid grey 1px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";
    comments.append(ul);
    commentContainer.append(comments);
}


//can define evenListener cb fxns outside of window.onload when more functionality is required
window.onload = () => {
    initializePage();

    //add functionality to new picture button
    const newPicBtn = document.querySelector("#new-pic");

    const fetchNewImage = () => {
        fetchImage();
        clicks = 0
        scoreCount.innerText = clicks;
        const commentLis = document.querySelectorAll("#comments-list > li");
        if (commentLis) {
            for (let commentLi of commentLis) {
                commentLi.remove();
            }
        }
    }

    newPicBtn.addEventListener("click", fetchNewImage);

    //add functionality to upvote and downvote buttons
    let scoreCount = document.querySelector("#score-count");
    const upvoteBtn = document.querySelector("#upvote");
    const downvoteBtn = document.querySelector("#downvote");

    let clicks = 0;
    const upvote = event => {
        event.preventDefault();
        clicks++;
        scoreCount.innerText = clicks;
    }
    const downvote = event => {
        event.preventDefault();
        clicks--;
        scoreCount.innerText = clicks;
    }

    upvoteBtn.addEventListener("click", upvote);
    downvoteBtn.addEventListener("click", downvote);

    //add functionality to comments section
    const submitCommentBtn = document.querySelector("#submit-comment");
    const commentInput = document.querySelector("#comment-input");
    const commentsUl = document.querySelector("#comments-list");

    const addComment = event => {
        event.preventDefault();
        const newComment = document.createElement("li");
        newComment.innerText = commentInput.value;
        newComment.style.width = "fit-content";
        newComment.style.padding = "10px 15px";
        newComment.style.marginBottom = "5px";
        newComment.style.border = "solid 1px black";
        newComment.style.borderRadius = "5px";
        commentsUl.append(newComment);
        commentInput.value = "";
    }

    submitCommentBtn.addEventListener("click", addComment);
};
