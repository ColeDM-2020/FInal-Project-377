function injectHTML(list){
  console.log('fired injectHTML')
  const target = document.querySelector('.stats_list');
  target.innerHTML = '';
  list.forEach((item) => {
    const str = `<li>${item.displayName}: ${item.value}</li>`;
    target.innerHTML += str
  })
}

function chartTime() {

}

async function mainEvent() {
  const mainForm = document.querySelector('.main_form');
  const generatePassYard = document.querySelector('#gen_passyard')

  let passYardListp = [];

  generatePassYard.addEventListener('click', async (submitEvent) => {
    p2004List = [];

    let p2004 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2004/types/2/athletes/1428/statistics/0');

    p2004List = await p2004.json();
    p2004Data = JSON.stringify(p2004List)
    parsedp2004Data = JSON.parse(p2004Data);
    datap2004 = parsedp2004Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2004);

    let p2005 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2005/types/2/athletes/1428/statistics/0');

    p2005List = await p2005.json();
    p2005Data = JSON.stringify(p2005List)
    parsedp2005Data = JSON.parse(p2005Data);
    datap2005 = parsedp2005Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2005);
    
    let p2006 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2006/types/2/athletes/1428/statistics/0');

    p2006List = await p2006.json();
    p2006Data = JSON.stringify(p2006List)
    parsedp2006Data = JSON.parse(p2006Data);
    datap2006 = parsedp2006Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2006);

    let p2007 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2007/types/2/athletes/1428/statistics/0');

    p2007List = await p2007.json();
    p2007Data = JSON.stringify(p2007List)
    parsedp2007Data = JSON.parse(p2007Data);
    datap2007 = parsedp2007Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2007);

    let p2008 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2008/types/2/athletes/1428/statistics/0');

    p2008List = await p2008.json();
    p2008Data = JSON.stringify(p2008List)
    parsedp2008Data = JSON.parse(p2008Data);
    datap2008 = parsedp2008Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2008);

    let p2009 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2009/types/2/athletes/1428/statistics/0');

    p2009List = await p2009.json();
    p2009Data = JSON.stringify(p2009List)
    parsedp2009Data = JSON.parse(p2009Data);
    datap2009 = parsedp2009Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2009);

    let p2010 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2010/types/2/athletes/1428/statistics/0');

    p2010List = await p2010.json();
    p2010Data = JSON.stringify(p2010List)
    parsedp2010Data = JSON.parse(p2010Data);
    datap2010 = parsedp2010Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2010);

    passYardListp.push(0);

    let p2012 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2012/types/2/athletes/1428/statistics/0');

    p2012List = await p2012.json();
    p2012Data = JSON.stringify(p2012List)
    parsedp2012Data = JSON.parse(p2012Data);
    datap2012 = parsedp2012Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2012);

    let p2013 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2013/types/2/athletes/1428/statistics/0');

    p2013List = await p2013.json();
    p2013Data = JSON.stringify(p2013List)
    parsedp2013Data = JSON.parse(p2013Data);
    datap2013 = parsedp2013Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2013);

    let p2014 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2014/types/2/athletes/1428/statistics/0');

    p2014List = await p2014.json();
    p2014Data = JSON.stringify(p2014List)
    parsedp2014Data = JSON.parse(p2014Data);
    datap2014 = parsedp2014Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2014);

    let p2015 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2015/types/2/athletes/1428/statistics/0');

    p2015List = await p2015.json();
    p2015Data = JSON.stringify(p2015List)
    parsedp2015Data = JSON.parse(p2015Data);
    datap2015 = parsedp2015Data.splits.categories[1].stats[18].value;
    passYardListp.push(datap2015);
    console.log(passYardListp)
    
  })

}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
