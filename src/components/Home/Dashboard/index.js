import React, { useEffect, useState } from "react";
import { Observable, Subject, filter, from, map, scan, tap } from "rxjs";
import { shareLatest } from "@react-rxjs/core";
import { Event } from "./Events";

const Dashboard = () => {
  const getLoginDetails = JSON.parse(localStorage.getItem("loginDetails"));
  const { email } = getLoginDetails || {};

  const first5Numbers = new Observable((obs) => {
    for (let i = 0; i <= 5; i++) {
      obs.next(i);
    }
    obs.complete();
  });

  first5Numbers.subscribe((val) => console.log(val, "zupermachi"));

  const myArr = from([23, 45, 56, 11, 78]);

  const processArr = myArr.pipe(
    map((x) => x * 2),
    filter((y) => y <= 50),
    shareLatest()
  );

  processArr.subscribe({
    next: (v) => console.log(v),
    error: (err) => console.log(err),
  });

  const [count, setCount] = useState(0);
  const increment$ = new Subject();

  useEffect(() => {
    const subscription = increment$
      .pipe(
        scan((count) => count + 1, 0) // Accumulate the count value on each click
      )
      .subscribe(setCount);

    return () => subscription.unsubscribe(); // Cleanup on component unmount
  }, []);

  const handleIncrement = () => {
    increment$.next(); // Emit value to the stream on click
  };

  const obs = new Observable((v) => {
    v.next(Math.random());
    v.complete();
  });

   obs.subscribe((res) => console.log(res, 'obs-approach1'));
   obs.subscribe((res) => console.log(res, 'obs-approach2'));

   const subj = new Subject();
   

   subj.subscribe((res) => console.log(res, 'subj1'));
   subj.subscribe((res) => console.log(res, 'subj2'));

   subj.next(Math.random());
   subj.complete();

  return (
    <div className="d-flex justify-content-between">
      <div className="col-7 bg-cementLight p-2">
        <h2 className="text-orange font-black pt-2">
          Hello {email?.split("@")?.[0]}
        </h2>
        <p className="text-sm text-dark font-bold">
          Get all your NEET PG info here!
        </p>
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>{count}</div>
      </div>
      <div className="col-5 bg-myLight shadow-custom vh-100">
        <Event />
      </div>
    </div>
  );
};

export default Dashboard;
