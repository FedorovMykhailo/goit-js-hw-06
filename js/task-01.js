const categories = document.querySelector('#categories');
const subCategories = categories.querySelectorAll('.item');
const mainCategoryCount = categories.childElementCount;

console.log(`Number of categories: ${mainCategoryCount}`);

subCategories.forEach(category => {
    const subCategoryTextName = category.querySelector('h2').textContent
    const subCategoryCount = category.querySelector('ul').childElementCount
    console.log(`Category: ${subCategoryTextName}`);   
    console.log(`Elements: ${subCategoryCount}`);   
});
