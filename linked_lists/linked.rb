class LinkedList
  attr_accessor: :head

  def initialize(head)
    @head = nil
  end

  def find_tail
    current_node = @head
    until current_node.next_node.nil?
      current_node = current_node.next_node
    end
    current_node
  end

    def append(value)
    #adds a new node containing value to the end of the list
    if @head
      n = find_tail
      n.next_node = Node.new(value)
    else
      @head = Node.new(value)
    end
  end

  def prepend(value)
    # adds a new node containing value to the start of the list
    if @head.nil?
      @head = Node.new(value)
    else
      @head = Node.new(value, @head)
  end

  def size
    #returns the total number of nodes in the list
    counter = 0
    current_node = @head
    until current_node.nil?
      counter += 1
      current_node = current_node.next_node
    end
    counter
  end

  def head
    #returns the first node in the list
    @head
  end

  def tail
    #returns the last node in the list
    find_tail
  end

  def at(index)
    #returns the node at the given index
    counter = 0
    current_node = @head
    until counter = index
      counter += 1
      current_node = current_node.next_node
    end
    current_node
  end

  def pop
    #removes the last element from the list
    nil if size < 1
    @head = nil if size == 1

    current_node = @head
    tail = find_tail
    until current_node.next_node == tail
      current_node = current_node.next_node
    end
    current_node.next_node = nil
  end

  def contains?(value)
    #returns true if the passed in value is in the list and otherwise returns false.
    current_node = @head
    until current_node.nil?
      return true if current_node == value
      current_node = current_node.next_node
    end
    return false
  end

  def find(value)
    #returns the index of the node containing value, or nil if not found.
    counter = 0
    current_node = @head
    until current_node.nil?
      return counter if current_node == value
      counter += 1
      current_node = current_node.next_node
    end
    return nil
  end
end

class Node
  attr_accessor: :value, :next_node

  def initialize (value = nil, next_node = nil)
    @value = value
    @next_node = next_node
  end

  def to_s
    puts "Node with Value #{@value}"
end