const fs = require('fs');

// Read the CSV
const csv = fs.readFileSync('./quotes.csv', 'utf8');
const lines = csv.split('\n').filter(line => line.trim());
const dataLines = lines.slice(1);

// Category detection functions
function getSourceCategories(author) {
    const categories = [];
    const authorLower = author.toLowerCase();

    // Tech
    if (authorLower.includes('jobs') || authorLower.includes('gates') || authorLower.includes('musk') ||
        authorLower.includes('bezos') || authorLower.includes('zuckerberg') || authorLower.includes('page') ||
        authorLower.includes('torvalds') || authorLower.includes('hopper') || authorLower.includes('kay') ||
        authorLower.includes('knuth') || authorLower.includes('cook') || authorLower.includes('nadella') ||
        authorLower.includes('sandberg') || authorLower.includes('thiel') || authorLower.includes('graham') ||
        authorLower.includes('martin') || authorLower.includes('fowler') || authorLower.includes('beck') ||
        authorLower.includes('spolsky') || authorLower.includes('atwood')) {
        categories.push('Tech');
    }

    // Cricket
    if (authorLower.includes('dhoni') || authorLower.includes('tendulkar') || authorLower.includes('kohli') ||
        authorLower.includes('kapil') || authorLower.includes('imran') || authorLower.includes('root') ||
        authorLower.includes('ponting') || authorLower.includes('lara') || authorLower.includes('warne') ||
        authorLower.includes('mcgrath') || authorLower.includes('waugh') || authorLower.includes('sangakkara') ||
        authorLower.includes('kallis') || authorLower.includes('de villiers') || authorLower.includes('mccullum') ||
        authorLower.includes('williamson') || authorLower.includes('wasim') || authorLower.includes('waqar') ||
        authorLower.includes('dravid') || authorLower.includes('ganguly') || authorLower.includes('kumble') ||
        authorLower.includes('gambhir') || authorLower.includes('bhogle') || authorLower.includes('gavaskar') ||
        authorLower.includes('mithali') || authorLower.includes('jayawardene') || authorLower.includes('laxman') ||
        authorLower.includes('stokes') || authorLower.includes('flintoff') || authorLower.includes('clarke') ||
        authorLower.includes('lloyd') || authorLower.includes('richards')) {
        categories.push('Cricket');
    }

    // Movies
    if (author.includes('(') && (author.includes('Star Wars') || author.includes('Matrix') ||
        author.includes('Godfather') || author.includes('Batman') || author.includes('Rocky') ||
        author.includes('Shawshank') || author.includes('Iron Man') || author.includes('Avengers') ||
        author.includes('Harry Potter') || author.includes('Lord of the Rings') || author.includes('Inception') ||
        author.includes('Fight Club') || author.includes('Gladiator') || author.includes('Terminator') ||
        author.includes('Finding Nemo') || author.includes('Toy Story') || author.includes('Lion King') ||
        author.includes('Kung Fu Panda') || author.includes('Spider-Man') || author.includes('Captain America') ||
        author.includes('Dead Poets') || author.includes('Pursuit of Happyness') || author.includes('Mulan'))) {
        categories.push('Movies');
    }

    // Hollywood
    if ((authorLower.includes('smith') && authorLower.includes('will')) || (authorLower.includes('johnson') && authorLower.includes('dwayne')) ||
        authorLower.includes('schwarzenegger') || authorLower.includes('downey') ||
        authorLower.includes('denzel') || authorLower.includes('hanks') || authorLower.includes('cameron')) {
        categories.push('Hollywood');
    }

    // Bollywood
    if (authorLower.includes('shah rukh') || authorLower.includes('aamir') || authorLower.includes('amitabh') ||
        authorLower.includes('priyanka') || authorLower.includes('kalam')) {
        categories.push('Bollywood');
    }

    // Leaders/Historical
    if (authorLower.includes('einstein') || authorLower.includes('roosevelt') || authorLower.includes('churchill') ||
        authorLower.includes('gandhi') || authorLower.includes('mandela') || authorLower.includes('luther king') ||
        authorLower.includes('lincoln') || authorLower.includes('kennedy') || authorLower.includes('washington') ||
        authorLower.includes('dalai lama') || authorLower.includes('mother teresa')) {
        categories.push('Leaders');
    }

    // Sports (non-cricket)
    if (authorLower.includes('jordan') || authorLower.includes('kobe') || authorLower.includes('phelps') ||
        authorLower.includes('ali') || authorLower.includes('gretzky') || authorLower.includes('lombardi') ||
        authorLower.includes('ruth')) {
        categories.push('Sports');
    }

    return categories;
}

function getThemeCategories(text, author) {
    const categories = [];
    const textLower = text.toLowerCase();

    // Motivation
    if (textLower.match(/motivat|inspir|believ|achiev|possib|potent|power/)) {
        categories.push('Motivation');
    }

    // Success
    if (textLower.match(/success|win|victor|champion|accomplish/)) {
        categories.push('Success');
    }

    // Failure
    if (textLower.match(/fail|defeat|mistake|wrong|error|loss/)) {
        categories.push('Failure');
    }

    // Dreams
    if (textLower.match(/dream|vision|imagin|hope|wish/)) {
        categories.push('Dreams');
    }

    // Hard Work
    if (textLower.match(/work|effort|practice|dedicat|persist|hust/)) {
        categories.push('Hard Work');
    }

    // Leadership
    if (textLower.match(/lead|respons|team|togeth|guid|manag/)) {
        categories.push('Leadership');
    }

    // Innovation
    if (textLower.match(/innovat|creat|new|invent|change|future/)) {
        categories.push('Innovation');
    }

    // Courage
    if (textLower.match(/courag|brave|fear|risk|bold/)) {
        categories.push('Courage');
    }

    // Wisdom
    if (textLower.match(/wisdom|learn|know|understand|think|mind/)) {
        categories.push('Wisdom');
    }

    // Perseverance
    if (textLower.match(/persever|continue|never give|keep going|don't quit|don't stop/)) {
        categories.push('Perseverance');
    }

    return categories;
}

const quotes = dataLines.map(line => {
    const match = line.match(/^"(.+)",(.+)$/);
    if (match) {
        const text = match[1].replace(/""/g, '"');
        const author = match[2];

        // Get categories
        const sourceCategories = getSourceCategories(author);
        const themeCategories = getThemeCategories(text, author);
        const allCategories = [...new Set([...sourceCategories, ...themeCategories])];

        // If no categories, add a default
        if (allCategories.length === 0) {
            allCategories.push('Wisdom');
        }

        return { text, author, categories: allCategories };
    }
    return null;
}).filter(q => q !== null);

// Write to new CSV with categories
const csvContent = 'quote,author,categories\n' + quotes.map(q => {
    const quoteSafe = q.text.replace(/"/g, '""');
    const categoriesStr = q.categories.join(';');
    return '"' + quoteSafe + '",' + q.author + ',' + categoriesStr;
}).join('\n');

fs.writeFileSync('./quotes.csv', csvContent);
console.log('Successfully categorized ' + quotes.length + ' quotes');
console.log('Sample categories:');
quotes.slice(0, 10).forEach(q => {
    console.log('  ' + q.author + ': ' + q.categories.join(', '));
});
