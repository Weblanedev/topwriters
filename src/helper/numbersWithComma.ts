export function numberWithCommas(number: any) {
    if (!number) return number;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export function decimalNumberWithCommas(number: any) {
    const options = {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return number.toLocaleString("en-US", options);
  }