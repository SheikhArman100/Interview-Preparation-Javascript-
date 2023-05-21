var isAnagram = function(s, t) {
    //!my solution.but takes too many time to run
    // let word1=s.split("")
    // let word2=t.split("")
    // if (word1.length===word2.length){
    //     for(let letter1 of word1){
    //         for (let letter2 of word2){
    //             if(letter1===letter2){
    //                 let index=word2.indexOf(letter2)
    //                 word2.splice(index,1)
    //                 console.log(word2)
    //                 break

    //             }
    //             letter2++
    //         }
    //         letter1++
    //     }
    //     console.log(word1)
    //     console.log("---------------------")
    //     console.log(word2)
    //     if (word2.length==0){
    //         return true
    //     }

    // }
    // return false

    //* 2nd solve---------------
  let word1=s.split("").sort()
    let word2=t.split("").sort()
    if (word1.length===word2.length){
       if (word1.join()===word2.join()){
            return true
        }
        return false
        

    }
    return false
    


}
console.log(isAnagram("rat","car"))