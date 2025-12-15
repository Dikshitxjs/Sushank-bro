// spread operator ... 

    const arr1=[ 1,2,3];
    const arr2=[ 1,2,3];
    const mergedArr=[...arr1,...arr2];
    console.log(mergedArr);
    
    const mergedArray = (a,b) => {
        const result = [...a,...b]
        return result;
    };
    console.log(mergedArray(arr1,arr2));