// Sample initial recipes
let recipes = [
    {
        id: 1,
        title: "Creamy Garlic Pasta",
        time: "25 mins",
        servings: "4 servings",
        category: "Dinner",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ingredients: "250g pasta\n4 cloves garlic, minced\n1 cup heavy cream\n1/2 cup grated Parmesan cheese\n2 tbsp butter\nSalt and pepper to taste\nFresh parsley, chopped",
        instructions: "1. Cook pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.\n\n2. While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.\n\n3. Pour in heavy cream and bring to a gentle simmer. Cook for 2-3 minutes, stirring occasionally.\n\n4. Reduce heat to low and stir in grated Parmesan cheese until melted and smooth.\n\n5. Add the drained pasta to the sauce, tossing to coat. If the sauce is too thick, add a little of the reserved pasta water.\n\n6. Season with salt and pepper to taste. Garnish with fresh parsley before serving.",
        published: true,
        date: "2023-10-15"
    },
    {
        id: 2,
        title: "Mediterranean Bowl",
        time: "20 mins",
        servings: "2 servings",
        category: "Lunch",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ingredients: "1 cup quinoa\n1 cucumber, diced\n1 cup cherry tomatoes, halved\n1/2 red onion, thinly sliced\n1/2 cup feta cheese, crumbled\n1/4 cup Kalamata olives\n2 tbsp olive oil\n1 tbsp lemon juice\n1 tsp dried oregano\nSalt and pepper to taste",
        instructions: "1. Cook quinoa according to package instructions. Let it cool slightly.\n\n2. In a large bowl, combine diced cucumber, halved cherry tomatoes, sliced red onion, and Kalamata olives.\n\n3. In a small bowl, whisk together olive oil, lemon juice, dried oregano, salt, and pepper to make the dressing.\n\n4. Add the cooked quinoa to the vegetable mixture and pour the dressing over. Toss to combine.\n\n5. Divide the quinoa mixture between two bowls and top with crumbled feta cheese.\n\n6. Serve immediately or refrigerate for up to 2 days.",
        published: true,
        date: "2023-10-12"
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        time: "40 mins",
        servings: "6 servings",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ingredients: "200g dark chocolate, chopped\n200g unsalted butter\n4 large eggs\n200g granulated sugar\n100g all-purpose flour\nButter for ramekins\nCocoa powder for dusting\nVanilla ice cream for serving",
        instructions: "1. Preheat oven to 200°C (400°F). Butter 6 ramekins and dust with cocoa powder.\n\n2. In a heatproof bowl set over a pan of simmering water, melt the chocolate and butter together, stirring until smooth. Remove from heat and let cool slightly.\n\n3. In a separate bowl, whisk the eggs and sugar until pale and thickened, about 5 minutes.\n\n4. Gently fold the melted chocolate mixture into the egg mixture.\n\n5. Sift the flour over the chocolate mixture and fold until just combined.\n\n6. Divide the batter evenly among the prepared ramekins.\n\n7. Bake for 12-14 minutes until the edges are set but the centers are still soft.\n\n8. Let the cakes cool for 1 minute, then invert onto serving plates. Serve immediately with vanilla ice cream.",
        published: true,
        date: "2023-10-10"
    },
    {
        id: 4,
        title: "Avocado Toast with Poached Eggs",
        time: "15 mins",
        servings: "2 servings",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ingredients: "2 slices sourdough bread\n1 ripe avocado\n2 eggs\n1 tbsp lemon juice\nSalt and pepper to taste\nRed pepper flakes (optional)\nFresh cilantro or parsley for garnish",
        instructions: "1. Bring a pot of water to a gentle simmer for poaching eggs.\n\n2. Toast the sourdough bread until golden and crisp.\n\n3. Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.\n\n4. Add lemon juice, salt, and pepper to the avocado and mash with a fork until smooth but still slightly chunky.\n\n5. Poach the eggs in the simmering water for 3-4 minutes until whites are set but yolks are still runny.\n\n6. Spread the mashed avocado evenly on the toasted bread.\n\n7. Carefully place a poached egg on top of each toast.\n\n8. Season with additional salt, pepper, and red pepper flakes if desired. Garnish with fresh herbs.",
        published: true,
        date: "2023-10-08"
    },
    {
        id: 5,
        title: "Berry Smoothie",
        time: "5 mins",
        servings: "2 servings",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ingredients: "1 cup mixed berries (fresh or frozen)\n1 banana\n1 cup Greek yogurt\n1/2 cup milk or almond milk\n1 tbsp honey or maple syrup\n1 tsp chia seeds (optional)\nIce cubes (if using fresh berries)",
        instructions: "1. Add all ingredients to a blender.\n\n2. Blend until smooth and creamy.\n\n3. If the smoothie is too thick, add a little more milk until desired consistency is reached.\n\n4. Taste and adjust sweetness if needed.\n\n5. Pour into glasses and serve immediately.\n\n6. Garnish with fresh berries or mint leaves if desired.",
        published: true,
        date: "2023-10-05"
    }
];

let drafts = [];

// Categories data
const categories = [
    { id: 1, name: "Breakfast", icon: "fas fa-egg", color: "#FF6B6B" },
    { id: 2, name: "Lunch", icon: "fas fa-hamburger", color: "#4ECDC4" },
    { id: 3, name: "Dinner", icon: "fas fa-drumstick-bite", color: "#45B7D1" },
    { id: 4, name: "Desserts", icon: "fas fa-ice-cream", color: "#FFA07A" },
    { id: 5, name: "Drinks", icon: "fas fa-glass-martini-alt", color: "#98D8C8" },
    { id: 6, name: "Vegetarian", icon: "fas fa-leaf", color: "#7BC74D" },
    { id: 7, name: "Vegan", icon: "fas fa-seedling", color: "#50C878" },
    { id: 8, name: "Gluten-Free", icon: "fas fa-bread-slice", color: "#F7DC6F" },
    { id: 9, name: "Quick & Easy", icon: "fas fa-bolt", color: "#F39C12" },
    { id: 10, name: "Healthy", icon: "fas fa-heart", color: "#E74C3C" },
    { id: 11, name: "Comfort Food", icon: "fas fa-utensils", color: "#D35400" },
    { id: 12, name: "International", icon: "fas fa-globe-americas", color: "#3498DB" }
];

// DOM Elements
const recipesContainer = document.getElementById('recipes-container');
const publishedPostsContainer = document.getElementById('published-posts');
const draftPostsContainer = document.getElementById('draft-posts');
const recipeForm = document.getElementById('recipe-form');
const saveDraftBtn = document.getElementById('save-draft');
const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const blogPostContent = document.getElementById('blog-post-content');
const backToHomeBtn = document.getElementById('back-to-home');
const categoriesFullContainer = document.getElementById('categories-full-container');
const categoriesGrid = document.querySelector('.categories-grid');
const footerCategories = document.getElementById('footer-categories');
const categorySelect = document.getElementById('recipe-category');

// Image Upload Elements
const uploadOptions = document.querySelectorAll('.upload-option');
const imageInputs = document.querySelectorAll('.image-input');
const recipeImageUpload = document.getElementById('recipe-image-upload');
const uploadPreview = document.getElementById('upload-preview');
const startCameraBtn = document.getElementById('start-camera');
const cameraPreview = document.getElementById('camera-preview');
const capturePhotoBtn = document.getElementById('capture-photo');
const cameraCapture = document.getElementById('camera-capture');
const capturedImage = document.getElementById('captured-image');
const cameraPreviewResult = document.getElementById('camera-preview-result');
const retakePhotoBtn = document.getElementById('retake-photo');

// Camera variables
let stream = null;
let currentImageSource = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes();
    displayAdminPosts();
    displayCategories();
    populateCategorySelect();
    setupEventListeners();
    setupImageUpload();
});

// Display recipes on home page
function displayRecipes() {
    recipesContainer.innerHTML = '';
    
    const publishedRecipes = recipes.filter(recipe => recipe.published);
    
    if (publishedRecipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes published yet. Be the first to share your recipe!</p>';
        return;
    }
    
    publishedRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
    });
}

// Create recipe card HTML
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('data-id', recipe.id);
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
                <span><i class="far fa-clock"></i> ${recipe.time}</span>
                <span><i class="fas fa-user"></i> ${recipe.servings}</span>
            </div>
            <p class="recipe-excerpt">${recipe.instructions.substring(0, 100)}...</p>
            <span class="recipe-category">${recipe.category}</span>
        </div>
    `;
    return card;
}

// Display categories
function displayCategories() {
    // Home page categories grid
    categoriesGrid.innerHTML = '';
    categories.slice(0, 6).forEach(category => {
        const categoryCard = createCategoryCard(category);
        categoriesGrid.appendChild(categoryCard);
    });
    
    // Full categories page
    categoriesFullContainer.innerHTML = '';
    categories.forEach(category => {
        const categoryCard = createCategoryCard(category);
        categoriesFullContainer.appendChild(categoryCard);
    });
    
    // Footer categories
    footerCategories.innerHTML = '';
    categories.slice(0, 5).forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `<a href="#" class="nav-link" data-target="categories">${category.name}</a>`;
        footerCategories.appendChild(categoryItem);
    });
}

// Create category card
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-category', category.name);
    card.innerHTML = `
        <i class="${category.icon} category-icon"></i>
        <h3>${category.name}</h3>
    `;
    return card;
}

// Populate category select in create post form
function populateCategorySelect() {
    categorySelect.innerHTML = '<option value="">Select a category</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Display posts in admin panel
function displayAdminPosts() {
    publishedPostsContainer.innerHTML = '';
    draftPostsContainer.innerHTML = '';
    
    // Display published posts
    const publishedRecipes = recipes.filter(recipe => recipe.published);
    if (publishedRecipes.length === 0) {
        publishedPostsContainer.innerHTML = '<div class="post-item"><p>No published recipes yet.</p></div>';
    } else {
        publishedRecipes.forEach(recipe => {
            const postItem = createPostItem(recipe, true);
            publishedPostsContainer.appendChild(postItem);
        });
    }
    
    // Display draft posts
    if (drafts.length === 0) {
        draftPostsContainer.innerHTML = '<div class="post-item"><p>No draft recipes saved.</p></div>';
    } else {
        drafts.forEach(recipe => {
            const postItem = createPostItem(recipe, false);
            draftPostsContainer.appendChild(postItem);
        });
    }
}

// Create post item for admin panel
function createPostItem(recipe, isPublished) {
    const postItem = document.createElement('div');
    postItem.className = 'post-item';
    postItem.innerHTML = `
        <div class="post-info">
            <h3>${recipe.title}</h3>
            <div class="post-meta">
                <span>${recipe.category} • ${recipe.time} • ${recipe.date || 'Not published'}</span>
            </div>
        </div>
        <div class="post-actions">
            ${isPublished ? 
                `<button class="action-btn edit-btn" data-id="${recipe.id}">Edit</button>
                 <button class="action-btn delete-btn" data-id="${recipe.id}">Delete</button>` :
                `<button class="action-btn edit-btn" data-id="${recipe.id}" data-draft="true">Edit</button>
                 <button class="action-btn delete-btn" data-id="${recipe.id}" data-draft="true">Delete</button>
                 <button class="action-btn btn" data-id="${recipe.id}" data-draft="true">Publish</button>`
            }
        </div>
    `;
    return postItem;
}

// Setup image upload functionality
function setupImageUpload() {
    // Upload option selection
    uploadOptions.forEach(option => {
        option.addEventListener('click', function() {
            const optionType = this.getAttribute('data-option');
            
            // Update active option
            uploadOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding input
            imageInputs.forEach(input => input.classList.remove('active'));
            document.querySelector(`.${optionType}-input`).classList.add('active');
            
            // Stop camera if switching away from camera
            if (optionType !== 'camera' && stream) {
                stopCamera();
            }
        });
    });
    
    // File upload preview
    recipeImageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                uploadPreview.innerHTML = `<img src="${event.target.result}" alt="Uploaded image">`;
                uploadPreview.classList.add('has-image');
                currentImageSource = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Camera functionality
    startCameraBtn.addEventListener('click', startCamera);
    capturePhotoBtn.addEventListener('click', capturePhoto);
    retakePhotoBtn.addEventListener('click', retakePhoto);
}

// Start camera
function startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(mediaStream) {
                stream = mediaStream;
                cameraPreview.srcObject = stream;
                startCameraBtn.style.display = 'none';
                capturePhotoBtn.style.display = 'block';
            })
            .catch(function(error) {
                console.error("Camera error: ", error);
                alert("Unable to access camera. Please check permissions and try again.");
            });
    } else {
        alert("Your browser doesn't support camera access.");
    }
}

// Capture photo from camera
function capturePhoto() {
    const context = cameraCapture.getContext('2d');
    cameraCapture.width = cameraPreview.videoWidth;
    cameraCapture.height = cameraPreview.videoHeight;
    context.drawImage(cameraPreview, 0, 0, cameraCapture.width, cameraCapture.height);
    
    const imageDataURL = cameraCapture.toDataURL('image/png');
    capturedImage.src = imageDataURL;
    currentImageSource = imageDataURL;
    
    cameraPreview.style.display = 'none';
    capturePhotoBtn.style.display = 'none';
    cameraPreviewResult.style.display = 'block';
    
    // Stop camera stream
    stopCamera();
}

// Retake photo
function retakePhoto() {
    cameraPreviewResult.style.display = 'none';
    cameraPreview.style.display = 'block';
    startCamera();
}

// Stop camera
function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

// Get current image source based on selected option
function getCurrentImageSource() {
    const activeOption = document.querySelector('.upload-option.active').getAttribute('data-option');
    
    switch(activeOption) {
        case 'url':
            return document.getElementById('recipe-image-url').value;
        case 'upload':
        case 'camera':
            return currentImageSource;
        default:
            return '';
    }
}

// Reset image upload form
function resetImageForm() {
    document.getElementById('recipe-image-url').value = '';
    recipeImageUpload.value = '';
    uploadPreview.innerHTML = '<i class="fas fa-image"></i><p>No image selected</p>';
    uploadPreview.classList.remove('has-image');
    
    // Reset camera
    cameraPreview.style.display = 'block';
    capturePhotoBtn.style.display = 'none';
    cameraPreviewResult.style.display = 'none';
    startCameraBtn.style.display = 'block';
    
    // Stop camera if running
    stopCamera();
    
    currentImageSource = null;
    
    // Reset to URL option
    uploadOptions.forEach(opt => opt.classList.remove('active'));
    document.querySelector('[data-option="url"]').classList.add('active');
    
    imageInputs.forEach(input => input.classList.remove('active'));
    document.querySelector('.url-input').classList.add('active');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Admin tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.admin-panel .tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(target).classList.add('active');
        });
    });

    // Mobile menu
    document.getElementById('mobile-menu').addEventListener('click', function() {
        document.getElementById('main-nav').classList.toggle('active');
    });

    // Recipe form submission
    recipeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        publishRecipe();
    });

    // Save draft
    saveDraftBtn.addEventListener('click', function() {
        saveAsDraft();
    });

    // Back to home button
    backToHomeBtn.addEventListener('click', function() {
        switchTab('home');
    });

    // Recipe card clicks
    document.addEventListener('click', function(e) {
        // Recipe card click
        const recipeCard = e.target.closest('.recipe-card');
        if (recipeCard) {
            const recipeId = parseInt(recipeCard.getAttribute('data-id'));
            showBlogPost(recipeId);
        }
        
        // Category card click
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const categoryName = categoryCard.getAttribute('data-category');
            filterRecipesByCategory(categoryName);
        }
        
        // Admin actions
        if (e.target.classList.contains('edit-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const isDraft = e.target.hasAttribute('data-draft');
            editRecipe(id, isDraft);
        }
        
        if (e.target.classList.contains('delete-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const isDraft = e.target.hasAttribute('data-draft');
            deleteRecipe(id, isDraft);
        }
        
        if (e.target.textContent === 'Publish' && e.target.classList.contains('btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            publishDraft(id);
        }
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
        this.reset();
    });
}

// Switch between tabs
function switchTab(tabName) {
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Close mobile menu if open
    document.getElementById('main-nav').classList.remove('active');
    
    // Reset image form when switching to create post
    if (tabName === 'create-post') {
        resetImageForm();
    }
}

// Filter recipes by category
function filterRecipesByCategory(categoryName) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.published && recipe.category === categoryName
    );
    
    recipesContainer.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = `<p>No recipes found in ${categoryName} category. Be the first to share a recipe!</p>`;
        return;
    }
    
    filteredRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
    });
    
    switchTab('home');
    
    // Scroll to recipes section
    document.getElementById('recipes-container').scrollIntoView({ behavior: 'smooth' });
}

// Show blog post detail
function showBlogPost(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (recipe) {
        // Format ingredients and instructions
        const ingredientsList = recipe.ingredients.split('\n').map(ingredient => 
            `<li>${ingredient}</li>`
        ).join('');
        
        const instructionsList = recipe.instructions.split('\n').map(instruction => 
            `<li>${instruction}</li>`
        ).join('');
        
        blogPostContent.innerHTML = `
            <div class="post-header">
                <img src="${recipe.image}" alt="${recipe.title}" class="post-image">
                <div class="post-title">
                    <h1>${recipe.title}</h1>
                    <div class="post-meta-detail">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-user"></i> ${recipe.servings}</span>
                        <span><i class="fas fa-tag"></i> ${recipe.category}</span>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <div class="post-info">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="ingredients-list">
                            ${ingredientsList}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h3>Instructions</h3>
                        <ol class="instructions-list">
                            ${instructionsList}
                        </ol>
                    </div>
                </div>
                
                <div class="comments-section">
                    <h3>Comments (2)</h3>
                    <div class="comment-form">
                        <textarea placeholder="Add your comment..."></textarea>
                        <button class="btn">Post Comment</button>
                    </div>
                    
                    <div class="comment">
                        <div class="comment-header">
                            <span class="comment-author">Sarah Johnson</span>
                            <span class="comment-date">2 days ago</span>
                        </div>
                        <p>This recipe was absolutely delicious! My whole family loved it. Will definitely make it again.</p>
                    </div>
                    
                    <div class="comment">
                        <div class="comment-header">
                            <span class="comment-author">Mike Thompson</span>
                            <span class="comment-date">1 week ago</span>
                        </div>
                        <p>I tried this last night and it turned out great. The instructions were easy to follow. Thanks for sharing!</p>
                    </div>
                </div>
            </div>
        `;
        
        switchTab('blog-post');
    }
}

// Publish recipe
function publishRecipe() {
    const title = document.getElementById('recipe-title').value;
    const time = document.getElementById('recipe-time').value;
    const servings = document.getElementById('recipe-servings').value;
    const category = document.getElementById('recipe-category').value;
    const image = getCurrentImageSource();
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    
    // Validate image
    if (!image) {
        alert('Please add an image for your recipe');
        return;
    }
    
    const newRecipe = {
        id: Date.now(),
        title,
        time,
        servings,
        category,
        image,
        ingredients,
        instructions,
        published: true,
        date: new Date().toISOString().split('T')[0]
    };
    
    recipes.unshift(newRecipe);
    recipeForm.reset();
    resetImageForm();
    
    alert('Recipe published successfully!');
    displayRecipes();
    displayAdminPosts();
    switchTab('home');
}

// Save as draft
function saveAsDraft() {
    const title = document.getElementById('recipe-title').value;
    const time = document.getElementById('recipe-time').value;
    const servings = document.getElementById('recipe-servings').value;
    const category = document.getElementById('recipe-category').value;
    const image = getCurrentImageSource();
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    
    // Validate image
    if (!image) {
        alert('Please add an image for your recipe');
        return;
    }
    
    const newDraft = {
        id: Date.now(),
        title,
        time,
        servings,
        category,
        image,
        ingredients,
        instructions,
        published: false
    };
    
    drafts.unshift(newDraft);
    recipeForm.reset();
    resetImageForm();
    
    alert('Draft saved successfully!');
    displayAdminPosts();
    switchTab('admin');
}

// Edit recipe
function editRecipe(id, isDraft) {
    const recipeList = isDraft ? drafts : recipes;
    const recipe = recipeList.find(r => r.id === id);
    
    if (recipe) {
        document.getElementById('recipe-title').value = recipe.title;
        document.getElementById('recipe-time').value = recipe.time;
        document.getElementById('recipe-servings').value = recipe.servings;
        document.getElementById('recipe-category').value = recipe.category;
        document.getElementById('recipe-ingredients').value = recipe.ingredients;
        document.getElementById('recipe-instructions').value = recipe.instructions;
        
        // Set image URL if it's not a data URL
        if (recipe.image && !recipe.image.startsWith('data:')) {
            document.getElementById('recipe-image-url').value = recipe.image;
        } else if (recipe.image && recipe.image.startsWith('data:')) {
            // For data URLs, we'll set it as the current image source
            currentImageSource = recipe.image;
            // Switch to upload option and show preview
            uploadOptions.forEach(opt => opt.classList.remove('active'));
            document.querySelector('[data-option="upload"]').classList.add('active');
            
            imageInputs.forEach(input => input.classList.remove('active'));
            document.querySelector('.upload-input').classList.add('active');
            
            uploadPreview.innerHTML = `<img src="${recipe.image}" alt="Recipe image">`;
            uploadPreview.classList.add('has-image');
        }
        
        // Remove the recipe from its current list
        if (isDraft) {
            drafts = drafts.filter(r => r.id !== id);
        } else {
            recipes = recipes.filter(r => r.id !== id);
        }
        
        switchTab('create-post');
    }
}

// Delete recipe
function deleteRecipe(id, isDraft) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        if (isDraft) {
            drafts = drafts.filter(recipe => recipe.id !== id);
        } else {
            recipes = recipes.filter(recipe => recipe.id !== id);
        }
        
        displayRecipes();
        displayAdminPosts();
    }
}

// Publish draft
function publishDraft(id) {
    const draft = drafts.find(r => r.id === id);
    
    if (draft) {
        draft.published = true;
        draft.date = new Date().toISOString().split('T')[0];
        
        recipes.unshift(draft);
        drafts = drafts.filter(r => r.id !== id);
        
        displayRecipes();
        displayAdminPosts();
        
        alert('Recipe published successfully!');
        switchTab('home');
    }
}
