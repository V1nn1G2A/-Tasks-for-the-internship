let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

console.log(str);

str = str.slice(0, str.indexOf('ПОНЕДЕЛЬНИК')) + 'MONDAY' +
  str.slice(str.indexOf('ПОНЕДЕЛЬНИК') + 'ПОНЕДЕЛЬНИК'.length, str.indexOf('ВТОРНИК')) + "TUESDAY" +
  str.slice(str.indexOf('ВТОРНИК') + 'ВТОРНИК'.length, str.indexOf('СРЕДА')) + "WEDNESDAY" +
  str.slice(str.indexOf('СРЕДА') + 'СРЕДА'.length, str.indexOf('ЧЕТВЕРГ')) + "THURSDAY" +
  str.slice(str.indexOf('ЧЕТВЕРГ') + 'ЧЕТВЕРГ'.length, str.indexOf('ПЯТНИЦА')) + "FRIDAY" +
  str.slice(str.indexOf('ПЯТНИЦА') + 'ПЯТНИЦА'.length, str.indexOf('СУББОТА')) + "SATURDAY" +
  str.slice(str.indexOf('СУББОТА') + 'СУББОТА'.length, str.indexOf('ВОСКРЕСЕНЬЕ')) + "SUNDAY" +
  str.slice(str.indexOf('ВОСКРЕСЕНЬЕ') + 'ВОСКРЕСЕНЬЕ'.length, str.length);
  
console.log(str);