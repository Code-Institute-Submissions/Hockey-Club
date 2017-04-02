describe("DateOfBirth", function() {

    describe('Verify Age', function() {
        it('should return true if Todays date minus dateOfBirth is less than 8 (years)', function() {
        	var dateOfBirth = new Date(2013, 9, 23); 
            expect(verifyAge(dateOfBirth)).toBe(true);
        });

        it('should return false if Todays date minus dateOfBirth is more than 8 (years)', function() {
        	var dateOfBirth = new Date(2000, 4, 15);
            expect(verifyAge(dateOfBirth)).toBe(false);
        });

        it('should fail if dateOfBirth is not a valid dateTime', function() {
        	spyOn(window, "alert");
            var dateOfBirth = "Words";
            verifyAge(dateOfBirth);
            expect(window.alert).toHaveBeenCalledWith("Argument should be a valid Date object");
        });
    });
});