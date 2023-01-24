/* 
Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num 
returns a string for this number : "Phone => num, Name => name, Address => adress"

It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"

Problem:
Given two strings one with several contacts and another with just a number return the specific persons name number 
and address from the string

*/

export const phone = (str: string, num: string): string => {
  // your code
  let phoneNumber = '';
  let name = '';
  let address = '';
  const strArr = str.split('.');
  console.log(strArr);
  return `Phone => ${phoneNumber},  Name => ${name}, Address => ${address}`;
};
