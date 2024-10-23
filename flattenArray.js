// Reference: https://forum.freecodecamp.org/

let testArray = [1,2,3,[4,5, [6,7]]];

function flatArrayWithRecursion(arr) {
    const flattenedArray = [];
      for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          flattenedArray.push(...flatArrayWithRecursion(arr[i]));
      } else {
           flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  

  function trampoline(fn) {
        while (typeof fn === 'function') {
          fn = fn(); 
        }
        return fn; 
      }

    // console.log(flatArrayWithRecursion(testArray))
    console.log(trampoline(flatArrayWithRecursion(testArray)))
    
