it("should calculate the monthly rate correctly", function () {
	// ...
	expect(
		calculateMonthlyPayment({ amount: 10000, years: 5, rate: 4.5 })
	).toEqual(5400);
});

it("should return a result with 2 decimal places", function () {
	expect(
		calculateMonthlyPayment({ amount: 10002, years: 5, rate: 4.5 })
	).toEqual(5401.08);
	// ..
});

/// etc
