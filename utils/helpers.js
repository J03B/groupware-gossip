module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getUTCMonth() + 1}/${new Date(date).getUTCDate()}/${new Date(date).getUTCFullYear()}`;
    },
    get_username: async (userId) => {
      const response = await fetch(`api/users/getUsernameById/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const uNam = "";
      response.then((userData) => uNam = userData.id);
      return uNam;
    },
  };
  