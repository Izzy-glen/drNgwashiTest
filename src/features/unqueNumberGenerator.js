export const uniqueNumGen = (sn) => {
  let today = new Date();

  //   let uniqueCode = ["A"];
  //   uniqueCode.push(sn);
  //   uniqueCode.push(today.getDate());
  //   uniqueCode.push(today.getMonth() + 1);
  //   uniqueCode.push(today.getYear() - 100);
  //   let temp = uniqueCode.toLocaleString();
  //   let final = temp.replaceAll(",", "");
  //   console.log(final);

  //   let VS;

  let code = `A${sn}${today.getDate()}${today.getMonth() + 1}${
    today.getYear() - 100
  }`;
  return code;
};
