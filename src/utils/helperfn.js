const filterData=(allProduct,searchTxt)=>{
  const filter=allProduct.filter(item=>item.name.toLowerCase().includes(searchTxt.toLowerCase()));
  return filter;
}
export default filterData;