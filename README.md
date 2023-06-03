<div align="center">
  <h1>Projeto A3 - AutoPass</h1>
  <div align="center">
    <img src="https://img.shields.io/static/v1?label=Nome&message=Gabriel%20de%20Almeida&color=black&style=for-the-badge"/>
    <img src="https://img.shields.io/static/v1?label=RA&message=822230956&color=blue&style=for-the-badge"/>
  </div>
  <img src="https://user-images.githubusercontent.com/82405235/236637417-40bdb312-3c13-4b31-83c7-6e1b625453fe.jpg" alt="Mulher utilizando o Cartão TOP no ônibus" style="width: 100%"/>
</div>

<hr>
<div>
  <p><strong>Nota para o professor:</strong> no momento estou sem disponibilidade para assistir as aulas de forma síncrona e estou fazendo o projeto de forma individual. Contudo, ficaria muito feliz e agradecido com um <i>feedback</i> do trabalho. O meu e-mail para contato é <strong>almeidag2001@gmail.com</strong>. Obrigado!</p>
</div>
<hr>

<h2>Sumário</h2>
<ol>
  <li><a href="#introducao">Introdução</a></li>
  <li><a href="#fluxos-usuario">Fluxos de usuário</a></li>
  <li><a href="#personas">Personas</a></li>
  <li><a href="#cenarios">Cenários</a></li>
  <li><a href="#prototipo-lo-fi">Protótipo lo-fi</a></li>
  <li><a href="#prototipo-hi-fi">Protótipo hi-fi</a></li>
  <li><a href="#avaliacao-heuristicas">Avaliação das Heurísticas de Nielsen</a></li>
</ol>

<div id="introducao">
  <h2>Introdução</h2>
  <p>Esse projeto compreende todos os entregáveis relacionados a atividade interdisciplinar (A3) do quarto semestre do curso de Análise e Desenvolvimento de Sistemas da Universidade São Judas. O projeto tem como objetivo a realização do <i>redesign</i> das telas do software de compra e recarga de bilhetes dos trens, metrôs e ônibus da cidade de São Paulo. O sistema atual é gerido pela TOP (AutoPass) e também abrange a recarga de cartões Bilhete Único.</p>
</div>

<div id="fluxos-usuario">
  <h2>Fluxos de usuário</h2>
  <p>Os fluxos de usuário são uma técnica para realizar o mapeamento das telas de um aplicativo de maneira ágil a fim de compreender todos os possíveis caminhos e necesidades de um sistema.</p>
  <p>Partindo dessa premissa, foram mapeados os fluxos de todos os tipos de compra que podem ser realizadas através da ATMs do TOP. Sendo eles: compra de Cartão TOP ou Bilhete Único utilizando dinheiro como forma de pagamento e compra de QRCode, Cartão TOP ou Bilhete Único utilizando cartão de débito como forma de pagamento.</p>
  <p>Com o intuito de gerar uma melhor visualização - devido as grandes dimensões - dos fluxos de usuário, você pode acessar os fluxos criados através do seguinte link:</p>
  <p><a href="https://www.figma.com/file/ux1I8qyrsG7UJNe7zmnhhV/Fluxos-de-usu%C3%A1rio?type=whiteboard&node-id=0%3A1&t=95KK38dpLu78WYCG-1">Fluxos de usuário</p>
</div>

<div id="personas">
  <h2>Personas</h2>
  <p>As personas são as representações fictícias do seu cliente ideal que são baseadas em comportamentos e características reais de seus usuários. Para abranger uma parte maior dos passageiros de trem, ônibus e metrô de São Paulo, foram criadas personas com idade e personalidade contrastantes.</p>
  <h3>Arnaldo de Souza Pereira</h3>
  <p>Arnaldo foi pensado como um adulto de meia idade que apesar de ter vivido a revolução da tecnologia durante sua fase adulta, não tem medo de tentar aprender a utilizar novas tecnologias, desde que essas façam sentido e tragam praticidade no seu dia a dia.</p>
  <img src="https://user-images.githubusercontent.com/82405235/236636568-53ab1fd8-05e6-487d-831d-755daf34d4fa.png" alt="Persona Arnaldo de Souza Pereira" style="width: 80%"/>
  <h3>Elizabete Maria da Silva</h3>
  <p>O perfil de Elizabete faz referência ao público mais velho que utiliza o transporte público e que, na maioria dos casos, enfrenta dificuldades de adaptação com as mais recentes tecnologias. Contudo, é importante entender e auxiliar esse grupo de clientes.</p>
  <img src="https://user-images.githubusercontent.com/82405235/236636630-d8455f4a-e64e-459b-a2c3-1cafead02c33.png" alt="Persona Elizabete Maria da Silva" style="width: 80%"/>
  <h3>Pedro Rodrigues de Oliveira</h3>
  <p>Pedro é jovem, arrojado e curioso um perfil que sozinho vai aprender e migrar para a mais recente e prática maneira de realizar tarefas. Sua personalidade abrange grande parte do público mais jovem.</p>
  <img src="https://user-images.githubusercontent.com/82405235/236636636-116a3bbc-940d-4d18-80c3-65433a8e7ce1.png" alt="Persona Pedro Rodrigues de Oliveira" style="width: 80%"/>
</div>

<div id="cenarios">
  <h2>Cenários</h2>
  <p>Os cenários ajudam a comunicar a essência da idéia de produto dentro de um definido contexto provável de uso. Pensar em o que o usuário vai fazer pode parecer não muito controlável mas mapear alguns cenários comuns pode ser útil para compreender as limitações da solução, afinal é o produto que deve se adaptar ao contexto de uso, e não o contrário.</p>
  <p>Os cenários aqui presentes foram criados em volta da realidade das personas que foram desenvolvidas para esse projeto e serão relatados em sequência.
  <h3>Cenário do Arnaldo</h3>
  <p>Certo dia no caminho para o trabalho, Arnaldo precisa recarregar o seu vale transporte. Ao chegar na estação de trem, ele é informado que a única ATM que existia ali está em manutenção. Apesar de um pouco nervoso, por imaginar que irá precisar comprar um bilhete, ele mantém a calma e pede informação para um dos guardas da estação perguntando se existe alguma outra maneira de realizar essa recarga.</p>
  <p>O guarda, de maneira solícita, o ajuda a baixar o aplicativo no celular e fazer o processo pelo próprio app da TOP. Arnaldo fica impressionado com a praticidade do aplicativo e começa, após o ocorrido, fazer todos os processos relacionados ao seu cartão diretamente do app no conforto da sua casa.</p>
  <h3>Cenário da Elizabete</h3>
  <p>Pela manhã, Dona Bete se arruma e faz seu caminho até a estação de trem com o objetivo de se locomover até a casa de seu filho mais velho para ajudá-lo com seu neto, ainda bebê, uma vez que ambos os pais da criança precisam trabalhar.</p>
  <p>Ao chegar na estação, se depara com uma fila enorme nas ATMs onde costuma comprar o seu bilhete. Finalmente chega a sua vez e após realizar  a compra do bilhete, ela percebe a mensagem de que a compra do bilhete pode ser realizada também pelo app do TOP. Ainda que tenha resistência para aprender novas tecnologias, Bete resolve dar uma chance a fim de evitar o estresse da fila.</p>
  <p>Mais tarde, Elizabete pede ajuda para o seu filho que lhe ensina como usar o aplicativo. Então, à partir desse dia ela começou a realizar as compras apenas através do app.</p>
  <h3>Cenário do Pedro</h3>
  <p>No caminho para o trabalho no início do mês, Pedro precisa realizar a recarga do seu cartão TOP na ATM da estação. Por conta da quantidade de pessoas precisando passar pelo mesmo processo, ele decide, de uma vez por todas, baixar o aplicativo e realizar a recarga do seu cartão ali mesmo.</p>
  <p>Devido a utilização do app, Pedro não se atrasou nesse dia. O app, então, virou costume e agora todo final/início de mês ele utiliza o aplicativo para realizar a recarga do seu vale transporte.</p>
</div>

<div id="prototipo-lo-fi">
  <h2>Protótipo lo-fi</h2>
  <p>Os protótipos lo-fi, também conhecidos como protótipos de baixa fidelidade, são representações simplificadas e de baixo custo de uma interface ou experiência do usuário. Eles são criados durante a fase inicial do processo de design para explorar ideias, testar conceitos e iterar rapidamente. Os protótipos lo-fi podem ser feitos de forma manual, usando papel, canetas, recortes ou de forma digital, com ferramentas simples de design. Eles são úteis para comunicar e validar ideias, envolver stakeholders, testar fluxos de interação e identificar problemas de usabilidade antes de investir recursos na implementação final. Ao criar protótipos de baixa fidelidade, os designers podem obter feedback valioso, refinar a experiência do usuário e economizar tempo e recursos no desenvolvimento.</p>
  <p>Foram criados wireframes (layout de uma interface, sem detalhes visuais, cores ou elementos gráficos refinados) das principais telas do sistema para a criação de uma visualização prévia de como o sistema, como um todo, vai ser apresentado para o usuário. Outras telas que podem ser necessárias posteriormente serão baseadas nos protótipos já existentes. Você pode ter acesso ao projeto dos wireframes no link a seguir:</p>
  <a href="https://www.figma.com/file/P8Cd3zOBBpnusJbYrbYNyX/Wireframe?type=design&node-id=7%3A106&t=CqnsOxZnZYhPuX2H-1">Figma - Protótipos Wireframe</a>
  <h3>Tela inicial</h3>
  <p>A seguinte tela será a cara do sistema, ou seja, a primeira que será apresentada ao usuário durante o uso de uma ATM. Nela, o usuário poderá escolher o tipo de compra de bilhete que irá efetuar. Além disso, disponibilizaremos um QRCode para <i>download</i> do aplicativo e informações à respeito do mesmo.</p>
  <img src="https://github.com/almeidagds/a3-autopass/assets/82405235/bb79d88e-c1cb-41d1-aa22-0b46c61c84fc" alt=Wireframe da tela inicial" style="width: 80%"/>
  <h3>Tela de carregamento / processamento</h3>
  <p>Essa tela irá aparecer sempre que algo um processo estiver sendo carregado ou algum procedimento estiver sendo realizado pelo usuário (como o pagamento através da máquina de cartão, por exemplo). Nesses casos, uma imagem relacionada a ação que esta sendo executada será disposta, tal qual a descrição dessa ação.</p>
  <img src="https://github.com/almeidagds/a3-autopass/assets/82405235/fe535962-bf55-4d43-b71c-91e8fe342fb4" alt=Wireframe da tela de carregamento / processamento" style="width: 80%"/>
  <h3>Tela de seleção do tipo de recarga</h3>
  <p>Aqui, o usuário selecionará o tipo de recarga que irá realizar na ATM. Lembrando que as opções sempre serão dispostas de acordo com a disponibilidade da ATM em questão.</p>
  <img src="https://github.com/almeidagds/a3-autopass/assets/82405235/bb892aef-ff67-40a8-b929-64d0fb8ecd74" alt=Wireframe da tela de carregamento / processamento" style="width: 80%"/>
  <h3>Tela de seleção de quantidade</h3>
  <p>Nessa parte do sistema o usuário irá determinar a quantidade de bilhetes ou o valor da compra. Para pagamentos com dinheiro a seleção será por valor e para outros tipos de pagamento será por quantidade de bilhetes, a fim de facilitar em ambos os casos.</p>
  <img src="https://github.com/almeidagds/a3-autopass/assets/82405235/6232106b-6640-46b0-ae19-4874be02c4a6" alt=Wireframe da tela de carregamento / processamento" style="width: 80%"/>
</div>

<div id="prototipo-hi-fi">
  <h2>Protótipo hi-fi</h2>
  <p>O protótipo hi-fi é uma representação detalhada e próxima do produto final, com elementos visuais, interações e funcionalidades refinados. Criado com ferramentas avançadas, ele permite testar o design e validar a experiência do usuário antes da implementação. Com animações, transições e interações complexas, o protótipo hi-fi proporciona uma visão precisa do produto, identificando problemas e ajustes antes do desenvolvimento completo, economizando tempo e custos.</p>
  <p>O protótipo hi-fi do projeto foi criado utilizando a ferramenta Figma, permitindo a criação de uma representação visual detalhada e interativa do produto final. Com o Figma, foi possível desenvolver transições, animações e interações que reproduzem o fluxo real do sistema, proporcionando uma experiência de navegação completa e realista. Você pode acessar o prótipo através do seguinte link:</p>
  <p><a href="https://www.figma.com/file/5S2uwWD3l8U8Fjao2F1MEG/Prot%C3%B3tipo-hi-fi?type=design&node-id=0%3A1&t=SILpGbJn0d3devAt-1">Figma - Protótipo hi-fi</a></p>
</div>

<div id="avaliacao-heuristicas">
  <h2>Avaliação das Heurísticas de Nielsen</h2>
  <p>As heurísticas de Nielsen, também conhecidas como as "10 Heurísticas de Nielsen", são um conjunto de diretrizes de usabilidade propostas por Jakob Nielsen, renomado especialista em design de interação. Essas heurísticas são um conjunto de princípios amplamente aceitos que ajudam a identificar problemas de usabilidade em interfaces de usuário. Elas fornecem um conjunto de diretrizes gerais, como feedback ao usuário, consistência e flexibilidade do sistema, prevenção de erros e design estético. As heurísticas de Nielsen são amplamente utilizadas na avaliação de interfaces e no processo de design, auxiliando os profissionais a criar produtos mais eficientes, intuitivos e satisfatórios para os usuários.</p>
  <p>A avaliação do projeto de acordo com as Heurísticas de Nielsen pode ser encontrada no seguinte arquivo:</p>
  <p><a href="https://github.com/almeidagds/a3-autopass/blob/main/avaliacao-heuristicas.pdf">Avaliação das Heurísticas de Nielsen</a></p>
</div>
