var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      productsICanEat = _.filter(products, function (product) {
        return !product.containsNuts && _.all(product.ingredients, function (ingredient) {
          return ingredient !== "mushrooms";
        });
      });

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _(_.range(1, 1000)).chain()
      .reduce(function (sum, next) {
        return !(next % 3 && next % 5) ? sum + next : sum;
      }, 0)
      .value();    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _(products).chain()
      .map(function (product) {
        return product.ingredients;
      })
      .flatten()
      .reduce(function (count, ingredient) {
        count[ingredient] = (count[ingredient] || 0) + 1;
        return count;
      }, ingredientCount);

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  it("should find the largest prime factor of a composite number", function () {
    var largestPrimeFactor = function (compositeNumber) { 
      var largestPrime = 1;
      var compositeRoot = Math.sqrt(compositeNumber);
      var testDivisor = 2;
      while (testDivisor <= compositeRoot) {
        if (!(compositeNumber % testDivisor)) {
          largestPrime = testDivisor;
          compositeNumber /= testDivisor;
        } else {
          testDivisor++;
        }
      }
      return largestPrime;
    };
    
    expect(largestPrimeFactor(7777770)).toBe(37);
  });
  
    
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    var largestPalindrome = function () {
      var largest = 0;
      var counter = 0;
      for (var i = 999; i >= 100; i--){
        for (var j = i; j >= 100; j--){
          counter++;
          var product = i * j;
          if (product <= largest) {
            if (i !== j) {
              break;
            }
            console.log(counter);
            return largest;
          }
          var productStr = product.toString();
          if (productStr.slice(0, 3) === productStr.slice(3, 6).split("").reverse().join("")) {
            largest = product;
            break;
          }
        }
      }
    };
    
    expect(largestPalindrome()).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    var leastCommonSeriesMultiple = function (seriesEnd) {
      
    }

    expect(leastCommonSeriesMultiple(20)).toBe(232792560);
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    var sumSquaresSquareSumsDiff = function (numList) { };

    expect(sumSquaresSquareSumsDiff([1,2,3,4,5,6,7])).toBe(-644);
  });

  it("should find the 10001st prime", function () {
    var primeByIndex = function (index) { };

    expect(primeByIndex(10001)).toBe(104743);
  });
  
});
