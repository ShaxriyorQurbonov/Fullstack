    const productList = [
    { 
        id: 1, 
        name: "Dell XPS 13", 
        price: 1500, 
        category: "laptop",
        description: "High-end laptop with OLED screen",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/spi/platinum/touch-oled/notebook-xps-13-9345-oled-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400"
    },
    { 
        id: 2, 
        name: "MacBook Air M2", 
        price: 1200, 
        category: "laptop",
        description: "Lightweight Apple laptop",
        image: "https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg"
    },
    { 
        id: 3, 
        name: "Lenovo ThinkPad X1 Carbon", 
        price: 1800, 
        category: "laptop",
        description: "Business laptop",
        image: "https://m.media-amazon.com/images/I/61XXyxsfdRL.jpg"
    },
    { 
        id: 4, 
        name: "HP Spectre x360", 
        price: 1400, 
        category: "laptop",
        description: "Convertible laptop",
        image: "https://m.media-amazon.com/images/I/71PUZ9o9U6L.jpg"
    },
    { 
        id: 5, 
        name: "Asus ROG Strix", 
        price: 2000, 
        category: "laptop",
        description: "Gaming laptop",
        image: "https://m.media-amazon.com/images/I/71kOH3in8TL._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 6, 
        name: "Microsoft Surface Laptop 5", 
        price: 1300, 
        category: "laptop",
        description: "Premium laptop",
        image: "https://m.media-amazon.com/images/I/61WGCddTI3L._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 7, 
        name: "Acer Aspire 5", 
        price: 500, 
        category: "laptop",
        description: "Budget laptop",
        image: "https://m.media-amazon.com/images/I/71Ph0Yx1a0L._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 8, 
        name: "iPhone 15", 
        price: 900, 
        category: "phone",
        description: "Latest Apple smartphone",
        image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
    },
    { 
        id: 9, 
        name: "Samsung Galaxy S23", 
        price: 800, 
        category: "phone",
        description: "Android flagship",
        image: "https://img.us.news.samsung.com/us/wp-content/uploads/2023/02/01124736/Galaxy-S23-Series_Image_02_HI-scaled.jpg"
    },
    { 
        id: 10, 
        name: "Google Pixel 8", 
        price: 700, 
        category: "phone",
        description: "Pure Android experience",
        image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/G2TJBWDQ2VJF3GM67GQDU7CNTE.jpg"
    },
    { 
        id: 11, 
        name: "OnePlus 11", 
        price: 600, 
        category: "phone",
        description: "Fast charging phone",
        image: "https://s7d1.scene7.com/is/image/dmqualcommprod/one-plus-11?$QC_Responsive$&fmt=png-alpha"
    },
    { 
        id: 12, 
        name: "Sony Xperia 1 V", 
        price: 1000, 
        category: "phone",
        description: "Pro camera phone",
        image: "https://media.wired.com/photos/64b987fc06bd08d2f808b336/master/w_1600%2Cc_limit/Sony-Xperia-1-V-Screen-Gear.png"
    },
    { 
        id: 13, 
        name: "Xiaomi 13", 
        price: 500, 
        category: "phone",
        description: "Affordable high-spec phone",
        image: "https://m.media-amazon.com/images/I/51Peclbdg2L._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 14, 
        name: "Nokia G400", 
        price: 300, 
        category: "phone",
        description: "Budget 5G phone",
        image: "https://m.media-amazon.com/images/I/71FQ-B7KXoL.jpg"
    },
    { 
        id: 15, 
        name: "Apple AirPods Pro", 
        price: 250, 
        category: "accessory",
        description: "Noise cancelling earbuds",
        image: "https://www.apple.com/v/airpods-pro/r/images/meta/og__c0ceegchesom_overview.png"
    },
    { 
        id: 16, 
        name: "Logitech MX Master 3", 
        price: 100, 
        category: "accessory",
        description: "Ergonomic mouse",
        image: "https://m.media-amazon.com/images/I/31jFlUatNDL._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 17, 
        name: "Anker PowerCore", 
        price: 50, 
        category: "accessory",
        description: "Portable charger",
        image: "https://i.ebayimg.com/images/g/JpUAAOSwdj1izfb8/s-l1200.jpg"
    },
    { 
        id: 18, 
        name: "Razer BlackWidow", 
        price: 150, 
        category: "accessory",
        description: "Mechanical keyboard",
        image: "https://m.media-amazon.com/images/I/71sXzUqI9XL._AC_UF894,1000_QL80_.jpg"
    },
    { 
        id: 19, 
        name: "Samsung T7 SSD", 
        price: 120, 
        category: "accessory",
        description: "External SSD",
        image: "https://img.us.news.samsung.com/us/wp-content/uploads/2020/01/08032534/SSD_T7.jpg"
    },
    { 
        id: 20, 
        name: "Belkin BoostCharge", 
        price: 40, 
        category: "accessory",
        description: "Wireless charger",
        image: "https://content.abt.com/image.php/belkin-wireless-charging-stand-black-WIA008TTBK.jpg?image=/images/products/BDP_Images/belkin-wireless-charging-stand-black-WIA008TTBK.jpg&canvas=1&width=750&height=550"
    }
    ];

let currentCategory = "all";

function renderProducts() {
    const productsContainer = document.getElementById("products");
    const searchValue = document.getElementById("search").value.toLowerCase();

    let filtered = productList.filter(item => {
        return (
            (currentCategory === "all" || item.category === currentCategory) &&
            item.name.toLowerCase().includes(searchValue)
        );
    });

    let html = "";

    filtered.forEach(item => {
        html += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <h5>${item.name}</h5>
                    <p>${item.description}</p>
                    <p><b>$${item.price}</b></p>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        `;
    });

    productsContainer.innerHTML = html;
}

// 🔍 Search
document.getElementById("search").addEventListener("input", renderProducts);

// 🎯 Filter
document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
        currentCategory = btn.dataset.category;
        renderProducts();
    });
});

// first render
renderProducts();