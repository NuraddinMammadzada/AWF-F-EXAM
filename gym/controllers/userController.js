// src/controllers/UserController.js
import User from '../models/User';

const UserController = {
  async createUser(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  },

  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update user' });
    }
  },

  async deleteUser(req, res) {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
};

export default UserController;