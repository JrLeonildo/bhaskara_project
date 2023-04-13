const value_A = document.querySelector('.value_a');
const value_B = document.querySelector('.value_b');
const value_C = document.querySelector('.value_c');
const button = document.querySelector('.btn');
const exit_delta = document.querySelector('.delta')
const exit_x_one_line = document.querySelector('.x_one')
const exit_x_two_lines = document.querySelector('.x_two')


function delta(a, b, c) {
  const delta_not_squreRoot = (Number(b) * Number(b)) - (4 * Number(a) * Number(c));
  const delta = Math. sqrt(delta_not_squreRoot);
  exit_delta.innerHTML = `Delta = ${delta_not_squreRoot}`;
  bhaskara_x_one(value_A.value, value_B.value);
    
  function bhaskara_x_one(a, b){      
    const x_one_line = (- Number(b) + delta) / (2 * Number(a));
    exit_x_one_line.innerHTML = `X' = ${x_one_line}`;
    bhaskara_x_two(value_A.value, value_B.value);

    function bhaskara_x_two(a, b){
      const x_two_lines = (- Number(b) - delta) / (2 * Number(a));
      exit_x_two_lines.innerHTML = `X" = ${x_two_lines}`
    }
  }
}

const start = () => {
  event.preventDefault()
  if(value_A.value==0 && value_B.value==0 && value_C.value==0){
    alert("[ERRO] Verifique os dados e tente novamente")
  }else{
    delta(value_A.value, value_B.value, value_C.value);
  }
}

button.addEventListener("click", start);