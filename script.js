

let formulario = document.querySelector('.form');

formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        let campoA = document.getElementById('campoa');
        let campoB = document.getElementById('campob');
        let messageInfor = document.querySelector('.message-infor');


        if(campoB.value > campoA.value) {
                messageInfor.innerHTML = "PARABÉNS: O formulário é válido";
                messageInfor.classList.add('success');
                messageInfor.classList.remove('error');
                messageInfor.classList.remove('warning');
        }else if(campoA.value === campoB.value) {
                messageInfor.innerHTML = "ATENÇÃO: Os campos são iguais";
                messageInfor.classList.add('warning');
                messageInfor.classList.remove('success');
                messageInfor.classList.remove('error');
        }else{
                messageInfor.innerHTML = "ERRO: O formulário é inválido";
                messageInfor.classList.add('error');
                messageInfor.classList.remove('warning');
                messageInfor.classList.remove('success');
        }

})
