if (document.querySelector('.dT_ProductProactiveSearch')) {

    var productSuggestions;
  
  
    let dT_ProductProactiveSearch = new Vue({
        el: ".dT_ProductProactiveSearch",
        delimiters: ['${', '}'],
        data: {
          searchResults: [{
              id: 1,
              product_title: "Learn JavaScript",
              variant_title: '',
              price: '',
              original_price: '',
              image: '',
              url: '',
              done: false
            }
          ],
          search: '',
          arrowCounter: -1,
          isOpen: false,
          filteredSearchResults: []
        },
  
        computed: {
            dT_ProductProactiveSugesstions(){
                return this.filteredSearchResults;
            }
        },
  
        methods: {
          setResult(text) {
            this.search = text
          },
      
          onArrow(event) {
  
            if (this.filteredSearchResults.length > 0) {
              this.arrowCounter = event.code == "ArrowDown" ? ++this.arrowCounter : --this.arrowCounter;
              if (this.arrowCounter >= this.filteredSearchResults.length)
                this.arrowCounter = (this.arrowCounter) % this.filteredSearchResults.length;
              else if (this.arrowCounter < 0)
                this.arrowCounter = this.filteredSearchResults.length + this.arrowCounter;
              this.setResult(this.filteredSearchResults[this.arrowCounter].text);
            }
  
          },
          
          showResultBlock() {
             $(".dT_PredictiveSearchResult_Section").css('display', 'block');     
          },
          
          inputChanged(event) {
            
            if (this.search.length) { 
                $(".dT_SearchClose").show(); 
                $(".dT_SearchClose").css('display', 'block');
            }  
  
            if (!this.search.length) { 
                this.filteredSearchResults = [];
                $(".dT_SearchClose").hide(); 
                $(".dT_SearchClose").css('display', 'none');
            }  
  
            
            if (event.code == "ArrowUp" || event.code == "ArrowDown")
              return;
      
            this.filteredSearchResults = [];
      
            if (event.code == "Enter")
              return;
      
              
            if (this.search.length) {
                dTPpredictiveSearch(this.search);
            }  
    
  
            // var filtered = this.searchResults.filter((searchResults) => {
            //   return searchResults.product_title.match(this.search)
            // });
      
            this.isOpen = true
            // this.filteredSearchResults.push(...filtered)
  
            return true;
      
          }
        }
      });
  
  
      const dTPpredictiveSearch = function(qText) {
        
        jQuery.getJSON("/search/suggest.json", {
          "q": qText,
          "resources": {
            "type": "product",
            "limit": 6,
            "options": {
              "unavailable_products": "last",
              "fields": "title,product_type,vendor,variants.title"
            }
          }
        }).done(function(suggestions) {
          var productSuggestions = suggestions.resources.results.products;
        
  
          productSuggestions = suggestions.resources.results.products;
  
          if (productSuggestions.length > 0) {
            var firstProductSuggestion = productSuggestions[0];
      
            dT_ProductProactiveSearch.filteredSearchResults = [];
            productSuggestions.forEach(product => {
              const dT_productSuggestion = [];
              dT_productSuggestion['id'] = product.id;
              dT_productSuggestion['product_title'] = product.title;
              dT_productSuggestion['variant_title'] = product.title;
              dT_productSuggestion['price'] = product.price;
              dT_productSuggestion['original_price'] = product.price_max;
              dT_productSuggestion['image'] = product.image;
              dT_productSuggestion['url'] = product.url;
              dT_productSuggestion['done'] = false;
      
              dT_ProductProactiveSearch.filteredSearchResults.push(Object.assign({}, dT_productSuggestion));
              
              dT_ProductProactiveSearch.showResultBlock();
                          
            });
            
          //   alert(`The title of the first product suggestion is: ${
          //         firstProductSuggestion.title}`
          //   );
          }
  
        });
      }
  
  }