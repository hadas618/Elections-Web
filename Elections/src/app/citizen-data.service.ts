import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitizenData } from './CitizenData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitizenDataService {
  private searchResults: Array<CitizenData> = [
    {
      id: '204466783',
      firstName: 'Hadas',
      lastName: 'Dahan',
      address: 'Harakefet 18',
      city: 'Holon',
      vote: true
    },
    {
      id: '204466700',
      firstName: 'Haim',
      lastName: 'Cohen',
      address: 'Harimon 5',
      city: 'Haifa',
      vote: false
    },
    {
      id: '302884648',
      firstName: 'David',
      lastName: 'Levy',
      address: 'Hahadas Ish 2',
      city: 'Holon',
      vote: true
    },
    {
      id: '121212123',
      firstName: 'shmuel',
      lastName: 'Moshkowitz',
      address: 'Hashaked 12',
      city: 'Haifa',
      vote: true
    },
    {
      id: '258963145',
      firstName: 'Yosef',
      lastName: 'Madlal',
      address: 'Hazait 2',
      city: 'Holon',
      vote: false
    },
    {
      id: '053698563',
      firstName: 'Tirza',
      lastName: 'Bitan',
      address: 'Hatamar 11',
      city: 'Haifa',
      vote: true
    },
    {
      id: '204466785',
      firstName: 'Tirza',
      lastName: 'Grudthinsky',
      address: 'Yehuda Halevy 18',
      city: 'Haifa',
      vote: true
    },
    {
      id: '3256981',
      firstName: 'Brachi',
      lastName: 'Guvlayov',
      address: 'Hazon Ish 12',
      city: 'Haifa',
      vote: false
    },
    {
      id: '125689784',
      firstName: 'Chana',
      lastName: 'Israeliyan',
      address: 'Ben Zakai 2',
      city: 'Bnei Brack',
      vote: false
    },
    {
      id: '984523618',
      firstName: 'Keyla',
      lastName: 'Gaukchman',
      address: 'Harav Shach 3',
      city: 'Jerusalem',
      vote: true
    },
    {
      id: '481569237',
      firstName: 'Miryam',
      lastName: 'Singemann',
      address: 'Rabenu Tam 2',
      city: 'Tel Aviv',
      vote: true
    },
    {
      id: '857485747',
      firstName: 'Rachel',
      lastName: 'Zimerman',
      address: 'Hasomer 2',
      city: 'Rishon LekZion',
      vote: false
    },
    {
      id: '968574856',
      firstName: 'Zvia',
      lastName: 'Abutbul',
      address: 'El Enkawe 12',
      city: 'Ashdod',
      vote: false
    },
    {
      id: '748514251',
      firstName: 'Chani',
      lastName: 'Shmueli',
      address: 'Genichovsky 1',
      city: 'Bat Yam',
      vote: false
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    },
    {
      id: '363636363',
      firstName: 'Michael',
      lastName: 'Ben-Porat',
      address: 'Povarsky 2',
      city: 'Ashklon',
      vote: true
    }
  ];
  private subject: BehaviorSubject<CitizenData[]> = new BehaviorSubject([]);
  private initialBallotState: boolean = true;
  private subjectBallotState: BehaviorSubject<boolean> = new BehaviorSubject(
    this.initialBallotState
  );
  chooseUpdateVoter: CitizenData;
  constructor() {
    let savedData = localStorage.getItem('data');
    if (!savedData) {
      localStorage.setItem('data', JSON.stringify(this.searchResults));
      this.subject.next(this.searchResults);

    } else {
      this.subject.next(JSON.parse(savedData));
    }
  }
  getSearchResults() {
    return this.searchResults;
  }
  setChooseUpdateVoter(citizenData: CitizenData) {
    this.chooseUpdateVoter = citizenData;
  }
  getChooseUpdateVoter() {
    return this.chooseUpdateVoter;
  }
  updateVoter(citizenDataId: string) {
    this.searchResults.find(
      citizenData => citizenData.id === citizenDataId
    ).vote = true;
    localStorage.setItem('data', JSON.stringify(this.searchResults));
    this.subject.next(this.searchResults);
  }
  /*updateBallotState() {
    this.initialBallotState = false;
  }*/
  getBallotState() {
    return this.initialBallotState;
  }
  get data$(): Observable<CitizenData[]> {
    return this.subject.asObservable();
  }
  get ballotState$(): Observable<boolean> {
    return this.subjectBallotState.asObservable();
  }
  set BallotState(ballotState: boolean) {
    this.subjectBallotState.next(ballotState);
  }
}
