function parseURLQuery(key) {
  const query = location.search.substring(1);
  const queries = query.split("&");

  for (const q of queries) {
    const [k, v] = q.split("=");
    if (k === key) return v;
  }

  return null;
}

function parseURLQueryReg(key) {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, "i");
  const res = location.search.substring(1).match(reg);
  if (res) return decodeURIComponent(res[2]);
  return null;
}
