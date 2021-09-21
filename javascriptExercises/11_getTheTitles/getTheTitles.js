const getTheTitles = function(books) {
    const answer = books.map(book => book.title);

    return answer;
};

module.exports = getTheTitles;
