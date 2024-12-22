const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

export async function dogMatcherGenerator(description: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                  "role": "user",
                  "content": "vou criar um app onde o usuário irá inserir algumas características físicas, psicológicas e valor máximo para a aquisição de um cachorro. "
                },
                {
                  "role": "assistant",
                  "content": "Que ideia maravilhosa!\n\nCriar um aplicativo que ajude os usuários a encontrar o cachorro ideal para eles é um projeto incrível. Aqui, vou fornecer algumas sugestões sobre como você pode implementar essa ideia:\n\n**Tela de Inscrição**\n\n* Crie uma tela de inscrição com as seguintes seções:\n\t+ Físico:\n\t\t- Peso\n\t\t- Altura\n\t\t- Gênero (macho/fêmea)\n\t\t- Edade (criança, adulto, etc.)\n\t+ Psicológico:\n\t\t- Nível de atividade (baixo, médio, alto)\n\t\t- Gastos (tempo, recursos, etc.)\n\t\t- Compatibilidade com crianças (sim/não)\n\t\t- Compatibilidade com outros pets (sim/não)\n\t+ Valor máximo:\n\t\t- Preço máximo para adquirir o cachorro\n\n**Algoritmo de matches**\n\n* Utilize essas informações para criar um algoritmo que faça matches entre os usuários e os cachorros. Você pode utilizar parâmetros como:\n\t+ Similaridade entre o peso e a altura do usuário e do cachorro\n\t+ Coordenamento entre as personalidades do usuário e do cachorro (ativos, quietos, etc.)\n\t+ Coincidência entre os valores máximos dos usuários e os preços dos cachorros\n\t+ etc.\n\n**Tela de Matcher**\n\n* Crie uma tela que mostre os cachorros que correspondem às características do usuário. Inclua informações como:\n\t+ Nome do cachorro\n\t+ Raça\n\t+ Idade\n\t+ Peso\n\t+ Altura\n\t+ Personalidade (paciente, educado, etc.)\n\t+ Informações adicionais (temão, coração, etc.)\n\n**Tela de Descrição do Cachorro**\n\n* Crie uma tela que forneça mais informações detalhadas sobre o cachorro. Inclua informações como:\n\t+ Histórico de saúde\n\t+ Comportamento\n\t+ Hábitos de vida\n\t+ Informações adicionais (treinamento, etc.)\n\n**Funções Adicionais**\n\n* Adicione funções adicionais para que os usuários possam:\n\t+ Pesquisar cachorros por nome, raça, etc.\n\t+ Filtrar os resultados por idade, peso, etc.\n\t+ Salvar seus favoritos\n\t+ Enviar mensagens para outros usuários para aprender mais sobre os cachorros\n\n**Desenvolvimento**\n\n* Para desenvolver o aplicativo, você pode utilizar tecnologias como:\n\t+ Front-end: React Native, Flutter, Angular, etc.\n\t+ Back-end: Node.js, Python, Java, etc.\n\t+ Banco de dados: MySQL, MongoDB, Firebase, etc.\n\n**Créditos**\n\n* Certifique-se de incluir créditos para os dados de cachorros que você utilizará no aplicativo. Você pode parceriar com criadores de cachorros, associções de amantes de cachorros, etc.\n\nEssas são apenas algumas sugestões sobre como você pode criar um aplicativo para ajudar os usuários a encontrar o cachorro ideal para eles. Boa sorte com o projeto!"
                },
                {
                  "role": "user",
                  "content": "quero te enviar o evento com os características da raça deseja e o valor máximo da compra. Logo após, você irá me responder com, no mínimo uma raça compatível, caso exista, e no máximo, 3 raças compatíveis. \nNo caso de não encontrar nenhuma raça compatível retorne o seguinte texto: \"Não encontramos nenhuma raça compatível com as características desejadas. Contudo, aconselhamos o senhor(a) buscar adotar animais de ruas pois, eles são extremamente inteligentes resistentes a diversas  doenças."
                },
                {
                  "role": "assistant",
                  "content": "Estou preparado para ajudar! Por favor, envie as características da raça desejada e o valor máximo da compra. Estou ansioso para encontrar as raças perfeitas para você!\n\n(Note: ao enviar as características, por favor use a seguinte estrutura: \"Físico: [peso], [idade], [gênero]; Psicológico: [atividade], [gastos], [compatibilidade com crianças], [compatibilidade com outros pets]; Valor máximo: [preço]\")\n\nEstou aqui para ajudar!"
                },
                {
                  "role": "user",
                  "content": "As informações que vou enviar são: porte (mini, pequeno, médio, grande), características (inteligente, ativo, protetor, carinhoso, pelagem (curta  ou longa), compatível com outros pets (sim ou não), compatível com crianças (pouco, razoável, extremamente), valor máximo (preço).\n"
                },
                {
                  "role": "assistant",
                  "content": "Excelente! Estou pronto para receber as informações. Por favor, envie-as na estrutura indicada anteriormente.\n\nFormato de envio:\n\nPorte: [mini, pequeno, médio, grande]\nCaracterísticas: [inteligente, ativo, protetor, carinhoso]\nPelagem: [curta, longa]\nCompatível com outros pets: [sim, não]\nCompatível com crianças: [pouco, razoável, extremamente]\nValor máximo: [preço]\n\nPor favor, envie as informações!"
                },
                {
                  "role": "user",
                  "content": "Porte:  médio\nCaracterísticas: inteligente, ativo, carinhoso\nPelagem: curta\nCompatível com outros pets: sim\nCompatível com crianças: extremamente\nValor máximo: 12.000,00"
                },
                {
                  "role": "assistant",
                  "content": "Muito bem!\n\nAqui estão algumas opções de raças que se adequam às suas características:\n\n**Opção 1:** Cane Corso\n- Porte: Médio\n- Características: Inteligente, ativo, carinhoso\n- Pelagem: Curta\n- Compatível com outros pets: Sim\n- Compatível com crianças: Extremamente\n- Valor: Variável (mas pode chegar a R$ 8.000,00 a R$ 12.000,00)\n\nO Cane Corso é uma raça italiana conhecida por sua inteligência e lealdade. São ótimos com crianças e outros pets, desde que treinados corretamente.\n\n**Opção 2:** Australian Cattle Dog\n- Porte: Médio\n- Características: Inteligente, ativo, carinhoso\n- Pelagem: Curta\n- Compatível com outros pets: Sim\n- Compatível com crianças: Extremamente\n- Valor: R$ 6.000,00 a R$ 10.000,00\n\nO Australian Cattle Dog, conhecido como Blue Heeler, é uma raça australiana conhecida por sua inteligência e trabalho em equipe. São ótimos com crianças e outros pets, e têm uma pelagem curta e fácil de manter.\n\n**Opção 3:** Border Terrier\n- Porte: Médio\n- Características: Inteligente, ativo, carinhoso\n- Pelagem: Curta\n- Compatível com outros pets: Sim\n- Compatível com crianças: Extremamente\n- Valor: R$ 4.000,00 a R$ 8.000,00\n\nO Border Terrier é uma raça britânica conhecida por sua inteligência e sua pelagem curta e fácil de manter. São ótimos com crianças e outros pets, e são razoavelmente adaptáveis a diferentes ambientes.\n\nLembre-se de que os preços podem variar dependendo da localização e do criador. É importante fazer uma research e verificar as características físicas e temperamentais de cada raça antes de tomar uma decisão."
                },
                {
                    "role": "user",
                    "content": description,
                  }
              ],
              "model": "llama3-8b-8192",
              "temperature": 1,
              "max_tokens": 1024,
              "top_p": 1,
              "stream": false,
              "stop": null
            });
          
            console.log("chatCompletion")
            console.log(chatCompletion)

        return chatCompletion.choices[0]?.message?.content;

    } catch (error) {
        //return("Não foi posível realizar sua pesquisa. Erro desconhecido.")
        return ("Não encontramos nenhuma raça compatível com as características desejadas. Contudo, aconselhamos o senhor(a) buscar adotar animais de ruas pois, eles são extremamente inteligentes e resistentes a diversas doenças.")
    }
}
  
    


