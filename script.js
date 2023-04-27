async function mainEvent() {
  const mainForm = document.querySelector('.main_form');
  const ctx = document.getElementById('myChart');

  let passYardListp = [];
  let passYardListe = [];

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

  /*Eli Manning*/

  let e2004 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2004/types/2/athletes/5526/statistics/0');

  e2004List = await e2004.json();
  e2004Data = JSON.stringify(e2004List)
  parsede2004Data = JSON.parse(e2004Data);
  datae2004 = parsede2004Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2004);

  let e2005 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2005/types/2/athletes/5526/statistics/0');

  e2005List = await e2005.json();
  e2005Data = JSON.stringify(e2005List)
  parsede2005Data = JSON.parse(e2005Data);
  datae2005 = parsede2005Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2005);
  
  let e2006 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2006/types/2/athletes/5526/statistics/0');

  e2006List = await e2006.json();
  e2006Data = JSON.stringify(e2006List)
  parsede2006Data = JSON.parse(e2006Data);
  datae2006 = parsede2006Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2006);

  let e2007 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2007/types/2/athletes/5526/statistics/0');

  e2007List = await e2007.json();
  e2007Data = JSON.stringify(e2007List)
  parsede2007Data = JSON.parse(e2007Data);
  datae2007 = parsede2007Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2007);

  let e2008 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2008/types/2/athletes/5526/statistics/0');

  e2008List = await e2008.json();
  e2008Data = JSON.stringify(e2008List)
  parsede2008Data = JSON.parse(e2008Data);
  datae2008 = parsede2008Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2008);

  let e2009 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2009/types/2/athletes/5526/statistics/0');

  e2009List = await e2009.json();
  e2009Data = JSON.stringify(e2009List)
  parsede2009Data = JSON.parse(e2009Data);
  datae2009 = parsede2009Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2009);

  let e2010 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2010/types/2/athletes/5526/statistics/0');

  e2010List = await e2010.json();
  e2010Data = JSON.stringify(e2010List)
  parsede2010Data = JSON.parse(e2010Data);
  datae2010 = parsede2010Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2010);

  let e2011 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2011/types/2/athletes/5526/statistics/0');

  e2011List = await e2011.json();
  e2011Data = JSON.stringify(e2011List)
  parsede2011Data = JSON.parse(e2011Data);
  datae2011 = parsede2011Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2011);

  let e2012 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2012/types/2/athletes/5526/statistics/0');

  e2012List = await e2012.json();
  e2012Data = JSON.stringify(e2012List)
  parsede2012Data = JSON.parse(e2012Data);
  datae2012 = parsede2012Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2012);

  let e2013 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2013/types/2/athletes/5526/statistics/0');

  e2013List = await e2013.json();
  e2013Data = JSON.stringify(e2013List)
  parsede2013Data = JSON.parse(e2013Data);
  datae2013 = parsede2013Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2013);

  let e2014 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2014/types/2/athletes/5526/statistics/0');

  e2014List = await e2014.json();
  e2014Data = JSON.stringify(e2014List)
  parsede2014Data = JSON.parse(e2014Data);
  datae2014 = parsede2014Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2014);

  let e2015 = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2015/types/2/athletes/5526/statistics/0');

  e2015List = await e2015.json();
  e2015Data = JSON.stringify(e2015List)
  parsede2015Data = JSON.parse(e2015Data);
  datae2015 = parsede2015Data.splits.categories[1].stats[18].value;
  passYardListe.push(datae2015);

  passYardListp = [...new Set(passYardListp)];
  passYardListe = [...new Set(passYardListe)];

  console.log(passYardListp);
  console.log(passYardListe);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
      datasets: [
        {
          label: 'Peyton Passing Yards',
          data: passYardListp,
          borderWidth: 1},
        {
          label: 'Eli Passing Yards',
          data: passYardListe,
          borderWidth: 1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
