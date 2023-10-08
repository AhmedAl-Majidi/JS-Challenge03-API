const app = el("#app");
const renderHtml = ( htmlString ) => {
    htmlString.forEach((component) => {
        app.innerHTML += component
    })
};
// ====================================================================================

const cards = (card) => {
    let elements = card.map((item) => {

    return `
    <div class="row card p-0 m-2 container-fluid " style="max-width: 18rem;">
    <div class="card-body p-0">
         <div class="bg-dark " style="height: 10rem;"></div>
        <p class="text-center" >${item.id}</p>
        <h5 class="card-title text-center mt-3"> ${item.title}</h5>

    </div>
    <div class="d-flex justify-content-center mb-2">
        <a href="#" id="card-btn"  class="btn btn-light border-dark"  onclick="itemSaled(event)">Add to cart</a>
    </div>
</div>
    `;
}).join('');
return `
<div class="container">
    <div class="row d-flex justify-content-around">
    ${elements}
    </div>
</div>
`
}

// ====================================================================================

const itemsCount = (itemsCount) => {
    let elements = itemsCount.map((item) => {        
        return `
        <li class="list-group-item text-center"   >${item.id}</li>
        `;
    }).join('');
    return`
        <div class="container my-5"  >
        <div class="row d-flex justify-content-center align-items-center  " >
        <div class="col-md-2 col-3">
        <div class="responsive-list">
        <ul class="list-group" id="dynamic-list">
            ${elements}
            </ul>
            </div>
            </div>
            </div>
            
        </div>
    `
}
//----------------------  ---------------------

// const fetchData = async (numRecords) => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';    
//     try {
        
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Error fetching data');
//       }

//       const data = await response.json();
//       const limitedData = data.slice(0, numRecords);


//       renderHtml([itemsCount(data)]);
//       renderHtml([cards(limitedData)]);
//       const listItems = els('#dynamic-list li');
      
//     //   let c;
//     //   // Add click event listener to each list item
//     //   listItems.forEach((listItem) => {
//     //       listItem.addEventListener('click', () => {
//     //           c = listItem.innerHTML;
//     //           console.log(c);
//     //         });
//     //     });
//         return data;
      
//     } catch (error) {
//         throw new Error('Error: ' + error.message);
//     }
// };

//   const data =  fetchData().catch((e) => {
//     console.log(e)
//   });

function fetchData(numRecords) {
    return new Promise((resolve, reject) => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
    
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          return response.json();
        })
        .then(data => {
          const limitedData = data.slice(0, numRecords);
          
          renderHtml([itemsCount(data)]);
          renderHtml([cards(limitedData)]);

          const listItems = els('#dynamic-list li');

          resolve(data);
        })
        .catch(error => {
          reject(new Error('Error: ' + error.message));
        });
    });
  }
  
  const data =  fetchData().catch((e) => {
        console.log(e)
      });
