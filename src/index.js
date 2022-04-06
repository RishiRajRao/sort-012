function sort012(a) {
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 0) cnt1++;
    if (a[i] == 1) cnt2++;
    if (a[i] == 2) cnt3++;
  }
  let i = 0;
  while (cnt1--) {
    a[i++] = 0;
  }
  while (cnt2--) {
    a[i++] = 1;
  }
  while (cnt3--) {
    a[i++] = 2;
  }

  console.log("res==", a);
}

sort012([1, 1, 2, 0, 1, 0, 2]);
