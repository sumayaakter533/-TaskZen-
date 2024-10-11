/**
 * * getId()
 * ? Retrieves a DOM element by its ID.
 *
 * @param {string} id - The ID of the HTML element to retrieve.
 * @returns {HTMLElement | null} - The HTML element with the specified ID, or null if no element is found.
 *
 * This function takes an ID string as input, uses `document.getElementById()`
 * to fetch the corresponding DOM element, and then returns the element.
 * If no element with the given ID exists, it returns `null`.
 */

const getId = id => {
    id = document.getElementById(id);
    return id;
};
