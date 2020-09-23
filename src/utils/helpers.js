
  // fetchData = async () => {
  //   const request = await axios.get(`${urlPath}`);
  //   this.setState({user: request.data.products});
  //   return request;
  // };

  // handleChange = (e) => {
  //   const { formData } = this.state;
  //   formData[e.target.name] = e.target.value.trim();
  //   this.setState({ formData });
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { formData } = this.state;
  //   console.log(formData);

  //   let res = await this.sendPostRequest(urlPath, formData);

  //   if (res.status === 200 && res.ok) {
  //     const response = await res.json();
  //     this.setState({ user: response.user, msg: response.message });
  //     console.log(response.user);
  //     return response;
  //     // parses JSON response into native JavaScript objects
  //   } else {
  //     const response = await res.json();
  //     //this.setState({ msg: response.message });
  //     console.log(response.message);
  //     return response;
  //   }
  // };

  // sendPostRequest = async (url = "", data = {}) => {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response;
  // };
