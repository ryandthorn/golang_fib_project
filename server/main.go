package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func fib(n int) int {
	a := 0
	b := 1
	for i := 0; i < n; i++ {
		temp := a
		a = b
		b = temp + a
	}
	return a
}

// Respond with a JSON array of a Fibonacci sequence
func Fibonacci(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	// Get value from URL params
	digits := ps.ByName("digits")

	// Convert string to integer
	i, err := strconv.Atoi(digits)
	if err != nil {
		log.Println("Conversion error")
		return
	}

	var sequence []int
	for n := 0; n < i; n++ {
		// Compute number.
		result := fib(n)
		sequence = append(sequence, result)
	}

	json.NewEncoder(w).Encode(sequence)
}

func main() {
	router := httprouter.New()
	router.GET("/api/fibonacci/:digits", Fibonacci)
	log.Fatal(http.ListenAndServe(":8080", router))
}
