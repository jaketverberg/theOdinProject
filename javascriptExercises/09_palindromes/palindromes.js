const palindromes = function (pali) {
    let reduced = pali.toLowerCase()
                    .replace(/[^\w\s]/gi, "")
                    .replace(/ /g, "")

    let reversed = reduced.split("")
                            .reverse()
                            .join("");

    return (reduced === reversed) ? true : false;
};

module.exports = palindromes;
