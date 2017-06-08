export default function iftt(params) {
  const [ condition, truthy, falsy ] = params;
  return condition ? truthy : falsy;
};
