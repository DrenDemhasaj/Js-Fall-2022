const sentence4 = 'have a GrEAT daY';
let sentece4_Titlecase = '';

const sentenceArray = sentence4.toLowerCase().split(' ');

sentece4_Titlecase = sentece4_Titlecase + sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1).toLowerCase() + ' ';

sentece4_Titlecase = sentece4_Titlecase + sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1).toLowerCase() +' ';

sentece4_Titlecase = sentece4_Titlecase + sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1).toLowerCase() +' ';

sentece4_Titlecase = sentece4_Titlecase + sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1).toLowerCase()

console.log(`sentence4_Titlecase -> ${sentece4_Titlecase}`); 

