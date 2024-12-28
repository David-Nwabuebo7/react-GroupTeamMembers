# Group Selection App

This is a React-based frontend application designed to help users create and manage groups by selecting participants from a list. It offers a responsive and interactive user interface for efficient group management.

## Features

- **Dynamic Group Creation**: Add and manage groups effortlessly.
- **Participant Selection**: Choose participants from a list with real-time updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **State Management**: Uses React state for seamless interactivity.

## Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/group-selection-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd group-selection-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Add Participants**: Input participant names in the text box and click "Add" to include them in the list.
2. **Create Groups**: Drag and drop participants into groups or use a random group generator.
3. **Manage Groups**: Edit group names, add/remove participants, or delete groups as needed.

## Project Structure

```
.
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Group.js
│   │   ├── ParticipantList.js
│   ├── App.js
│   ├── index.js
│   ├── styles
│       ├── App.css
│       ├── Group.css
├── package.json
```

### Key Components
- **App.js**: The root component managing state and rendering child components.
- **Group.js**: Handles individual group functionality.
- **ParticipantList.js**: Displays and manages the list of participants.

## Technologies Used

- **React**: Frontend library for building the UI.
- **CSS**: For styling and layout.
- **React Hooks**: For state and lifecycle management.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, feel free to reach out to:
- Email: your.email@example.com
- GitHub: [your-username](https://github.com/your-username)
