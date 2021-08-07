function ekstrakurikuler(data){
    //your code here!
    let obj = {};
    for (let i = 0;i<data.length;i++) {
        let name = data[i].name;
        for (let j = 0;j<data[i].club.length;j++) {
            let groupName = data[i].club[j];
            if (!obj[groupName]) {
                obj[groupName] = {}
            }
            let kelas = data[i].class;
            if (!obj[groupName][kelas]) {
                obj[groupName][kelas] = [];
            }
            obj[groupName][kelas].push(name)
        }
    }
    return obj;
  }
  
  const data = 
  [
    {
      name: 'Adi',
      class: 'Mawar',
      club: ['Bola', 'Bulutangkis']
    },
    {
      name: 'Cinthya',
      class: 'Melati',
      club: ['Membaca', 'Bulutangkis']
    },
    {
      name: 'Andika',
      class: 'Mawar',
      club: ['Bulutangkis', 'Membaca']
    },
    {
      name: 'Daniel',
      class: 'Mawar',
      club: ['Bola', 'Renang']
    }
  ]

let obj1 = {
    nama: 'Gilang'
}

console.log(ekstrakurikuler(data));
// console.log(data.club)

/* example output:
{
  Bola: {
    Mawar: ['Adi', 'Daniel']
  },
  Bulutangkis: {
    Mawar: ['Adi', 'Andika'],
    Melati: ['Cinthya']
  },
  Membaca: {
    Melati: ['Cinthya'],
    Mawar: ['Andika']
  },
  Renang: {
    Mawar: ['Daniel']
  }
} */