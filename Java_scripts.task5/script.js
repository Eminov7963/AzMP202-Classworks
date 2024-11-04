// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın
//  Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

// function sentence(sen , word){
    // let words = sen.split(" ")
    // for (let i = 0; i < words.length; i++) {
        // if(words[i]==word) {
            // return i;
        // }
    //    
            //    
    // }
// }
// console.log(sentence("Eminov Emini Emin","Emin"));


// function sentence(sen){
    // let words = sen.split(" ");
    // let uzun_soz = "";
    // for (let i = 0; i < words.length; i++) {
        // if(words[i].length > uzun_soz.length){
            //  
            // uzun_soz = words[i]
        //    
        // }
        // 
    // }
    // return uzun_soz;
//  
//  
//  
//  
// }
//  
// 
// console.log(sentence("Eminov Emini Emin"));


// Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu sözlərin anagram olub-olmadığını tapmalıdır.
// Anagram sözlər yerləri fərqli olsa da eyni hərflərdən təşkil olunmuş sözlərdir.
function cumle(words1,words2){
    words1 = words1.toLowerCase();
    words2 = words1.toLowerCase();
    let shorte1 = words1.split("").sort().sort().join(); 
    let shorte2 = words1.split("").sort().sort().join(); 
     if(shorte1 == shorte2){
        return "anagramdir"
     }
     else{
        return "anagram deyil"
     }
     
     
     
     
     
}
     
     
     
     
     
     
     
     
     
     
console.log(cumle("alma","lama"));
