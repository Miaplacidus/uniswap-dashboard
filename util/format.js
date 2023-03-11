const Fmt = {
  round(numStr, precision=2) {
    return parseFloat(numStr).toFixed(precision)
  },

  truncate(numStr, precision=2) {
    let num = parseFloat(numStr);
    let suffix = '';
    let trillion= 1_000_000_000_000,
        billion = 1_000_000_000,
        million = 1_000_000,
        thousand = 1_000;

    if (num >= trillion) {
      num = this.round(num / trillion, precision);
      suffix = 't';
    } else if (num >= billion){
      num = this.round(num / billion, precision);
      suffix = 'b';
    } else if (num >= million) {
      num = this.round(num / million, precision);
      suffix = 'm';
    } else if (num >= thousand) {
      num = this.round(num / thousand, precision);
      suffix = 'k';
    } else (
      num = this.round(num)
    )

    return `${num}${suffix}`;
  },

  ellipsize(str, len=7) {
    return `${str.slice(0, len)}...`;
  },

  humanizeTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  }
}

export default Fmt